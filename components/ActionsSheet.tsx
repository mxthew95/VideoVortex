import React, { FC, useEffect, useRef } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Switch,
  TouchableOpacity,
  Image,
  Alert,
  Dimensions
} from 'react-native'
import Result from './Result';
import BottomSheet from 'react-native-simple-bottom-sheet';
import { connect } from 'react-redux';
import { ActionsSheetProp, LogInterface, ModeInterface, ResultInterFace } from '../src/types';
import { ButtonGroup } from 'react-native-elements';
import { _DEFAULT_ITEMS, ID } from '../src/default';
import Carousel from 'react-native-snap-carousel';
const screen = Dimensions.get("screen");

const ActionsSheet: FC<ActionsSheetProp> = ({
  result,
  modeSettings,
  logs,
  selectedLogs,
  carousel,
  isSwitchEnabled,
  setResult,
  setModeSettings,
  setLogs,
  setCarousel,
  setIsSwitchEnabled
}) => {

  const _carousel = useRef(null);

  useEffect(()=>{

    if(_carousel){
      setCarousel(_carousel.current)
    }
  }, [carousel]);

  const handleModeChange = (value): void => {
    const mode = value == 1 ? false : true;
    const items = !mode ? _DEFAULT_ITEMS.filter(el => el < 1 ? Math.abs(el) <= result.money : true) : _DEFAULT_ITEMS;
    const index = !mode ? result.money : 20;

    const obj = {
      defaultMode: mode,
      validItems: items,
      selectedModeIndex: value
    };

    setModeSettings({
      ...modeSettings,
      ...obj
    });

    if (!mode) {
      setIsSwitchEnabled(false);
    }

    carousel.snapToItem(index);
  };

  const toggleSwitch = (value) => {
    const items = value ? _DEFAULT_ITEMS.slice(20) : _DEFAULT_ITEMS
    const index = value ? 0 : 20;
    const obj = {
      validItems: items,
    }
  
    setIsSwitchEnabled(value);

    setModeSettings({
      ...modeSettings,
      ...obj
    });

    carousel.snapToItem(index);
  };

  const handleCarouselIndexChange = (index) => {
    setModeSettings({ ...modeSettings, carouselIndex: index });
  };

  const showErrMessage = () => {
    Alert.alert(
      "",
      `You can't add if you have selected logs. Total ${selectedLogs.length} selected.`,
      [
        { text: "OK" }
      ]
    );
  };

  const handleAdd = (): void => {
    if (selectedLogs.length > 0) {
      showErrMessage();
      return;
    }

    const addedLog: LogInterface = {
      time: new Date().getTime(),
      type: '',
      id: ID(),
      value: 0
    };

    const _result: ResultInterFace = {
      fwd: 0,
      rew: 0,
      money: 0
    };

    if (modeSettings.defaultMode) {
      let _index = 20;
      //timeshift
      if (isSwitchEnabled) {
        addedLog.type = 'timeshift';
        addedLog.value = modeSettings.validItems[modeSettings.carouselIndex];
        _result.fwd = result.fwd + addedLog.value;
        _result.rew = result.rew + addedLog.value;
        _index = 0;
      }
      else {
        //forward or rewind
        addedLog.value = _DEFAULT_ITEMS[modeSettings.carouselIndex];
        if (addedLog.value < 0) {
          addedLog.type = 'rewind';
          _result.rew = result.rew + Math.abs(addedLog.value);
          _result.fwd = result.fwd;
        }
        else {
          addedLog.type = 'forward';
          _result.rew = result.rew;
          _result.fwd = result.fwd + addedLog.value;
        }
        _index = 20;
      }
      _result.money = result.money;
      setResult(_result);
      carousel.snapToItem(_index);
    }
    else {
      //money mode
      addedLog.value = modeSettings.validItems[modeSettings.carouselIndex];
      addedLog.type = addedLog.value > 0 ? 'money+' : 'money-';
      _result.money = result.money + addedLog.value;
      _result.fwd = result.fwd;
      _result.rew = result.rew;

      const _items = _DEFAULT_ITEMS.filter(el => el < 1 ? Math.abs(el) <= _result.money : true);

      setResult(_result);
      setModeSettings({ ...modeSettings, validItems: _items });
    }
    const sortedLogs = [...logs, addedLog].sort((a, b) => b.time - a.time);
    setLogs(sortedLogs);
  };

  const renderSliderItem = ({ item }) => {
    return (
      <View style={styles.sliderItem}>
        <Text style={styles.sliderItemText}>{item}</Text>
      </View>
    );
  }

  return (
    <BottomSheet
      isOpen={false}
      animationDuration={150}
      sliderMinHeight={150}
      sliderMaxHeight={screen.height}
    >
      <Result fwd={result.fwd} rew={result.rew} money={result.money} />

      <View style={styles.divider}></View>

      <View style={styles.modeButtonGroupContainer}>
        <ButtonGroup
          buttons={['RUNTIME', 'MONEY']}
          disabledSelectedStyle={styles.modeButtonDisabled}
          disabledSelectedTextStyle={styles.modeButtonTextDisabled}
          selectedIndex={modeSettings.selectedModeIndex}
          textStyle={styles.modeButtonText}
          onPress={handleModeChange}
          containerStyle={styles.modeButtonContainer}
          disabled={modeSettings.defaultMode ? [0] : [1]}
        />
      </View>

      <View style={styles.switchContainer}>
        <Switch
          disabled={!modeSettings.defaultMode}
          trackColor={{ false: "#767577", true: "#0020f0" }}
          thumbColor={isSwitchEnabled ? "#ffffff" : "#f4f3f4"}
          onValueChange={(value: boolean)=>toggleSwitch(value)}
          value={isSwitchEnabled}
        />
        <Text style={styles.switchText}>Timeshift</Text>
      </View>

      <View style={styles.sliderContainer}>
        <View style={styles.sliderPointer}></View>
        <Carousel
          layout={"default"}
          data={modeSettings.validItems}
          sliderWidth={250}
          itemWidth={50}
          inactiveSlideOpacity={0.5}
          firstItem={20}
          renderItem={renderSliderItem}
          activeSlideOffset={5}
          enableMomentum={true}
          useScrollView={true}
          onSnapToItem={handleCarouselIndexChange}
          ref={_carousel}
        />
      </View>

      <View style={styles.actionsSheetButtonContainer}>
        <TouchableOpacity
          onPress={handleAdd}
          disabled={modeSettings.validItems[modeSettings.carouselIndex] === 0}
        >
          <View style={styles.actionButton}>
            <Image style={styles.addButtonIcon} source={require('../add.png')} />
            <Text style={styles.addButtonText}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
    </BottomSheet >
  );
};

const styles = StyleSheet.create({
  divider: {
    alignSelf: 'center',
    height: 1,
    width: screen.width * 0.5 + 50,
    backgroundColor: '#d1d1d1',
    margin: 10
  },
  modeButtonGroupContainer: {
    width: screen.width - 80,
    alignSelf: 'center'
  },
  modeButtonDisabled: { backgroundColor: '#0020f0' },
  modeButtonTextDisabled: { color: '#ffffff' },
  modeButtonText: { fontSize: 16, fontWeight: 'bold' },
  modeButtonContainer: { marginBottom: 20 },
  switchContainer: {
    alignSelf: 'center',
    flexDirection: 'row'
  },
  sliderContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  sliderPointer: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderTopWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#666666",
  },
  sliderItem: {
    alignItems: 'center',
    backgroundColor: '#0020f0',
    borderRadius: 10
  },
  sliderItemText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  actionsSheetButtonContainer: {
    marginTop: 30,
    marginBottom: 10,
    alignItems: 'center'
  },
  actionButton: {
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 120,
    padding: 5
  },
  addButtonIcon: { width: 50, height: 50 },
  addButtonText: { color: 'black', fontWeight: 'bold' },
  switchText: { color: 'black', fontWeight: 'bold', fontFamily: 'monospace' }
})

const mapStateToProps = state => {
  return {
    result: state.result,
    modeSettings: state.modeSettings,
    logs: state.logs,
    selectedLogs: state.selectedLogs,
    carousel: state.carousel,
    isSwitchEnabled: state.isSwitchEnabled
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setResult: (result: ResultInterFace): void => dispatch({ type: 'SET_RESULT', result }),
    setModeSettings: (modeSettings: ModeInterface): void => dispatch({ type: 'SET_MODE_SETTINGS', modeSettings }),
    setLogs: (logs: LogInterface[]): void => dispatch({ type: 'SET_LOGS', logs }),
    setCarousel: (carousel: any): void => dispatch({ type: 'SET_CAROUSEL', carousel }),
    setIsSwitchEnabled: (isSwitchEnabled: boolean): void => dispatch({ type: 'SET_SWITCH', isSwitchEnabled }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionsSheet);