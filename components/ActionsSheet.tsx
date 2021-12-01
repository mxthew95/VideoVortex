import React, { FC } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Switch,
    TouchableOpacity
} from 'react-native'
import Result from './Result';
import BottomSheet from 'react-native-simple-bottom-sheet';

const ActionsSheet: FC = () => {
    return (
        <BottomSheet
        isOpen={false}
        animationDuration={150}
        sliderMinHeight={150}
        sliderMaxHeight={screen.height}
      >
        <Result fwd={result.fwd} rew={result.rew} money={result.money} />

        <View style={styles.divider}></View>

        <View style={styles.buttonGroupContainer}>
          <ButtonGroup
            buttons={['RUNTIME', 'MONEY']}
            disabledSelectedStyle={{ backgroundColor: '#0020f0' }}
            disabledSelectedTextStyle={{ color: '#ffffff' }}
            selectedIndex={modeSettings.selectedModeIndex}
            textStyle={{ fontSize: 16, fontWeight: 'bold' }}
            onPress={handleModeChange}
            containerStyle={{ marginBottom: 20 }}
            disabled={modeSettings.defaultMode ? [0] : [1]}
          />
        </View>

        <View style={styles.timeshift}>
          <Switch
            disabled={!modeSettings.defaultMode}
            trackColor={{ false: "#767577", true: "#0020f0" }}
            thumbColor={isSwitchEnabled ? "#ffffff" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isSwitchEnabled}
          />
          <Text style={{ fontWeight: 'bold', fontFamily: 'monospace' }}>Timeshift</Text>
        </View>

        <View style={styles.sliderContainer}>
          <View style={styles.triangle}></View>
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
            ref={(c) => { _carousel = c; }}
          />
        </View>

        <View style={styles.bottomSheetButtonContainer}>
          <TouchableOpacity
            onPress={handleAdd}
            disabled={modeSettings.validItems[modeSettings.carouselIndex] === 0}
          >
            <View style={styles.actionButton}>
              <Image style={{ width: 50, height: 50 }} source={require('./add.png')} />
              <Text style={{ fontWeight: 'bold' }}>Add</Text>
            </View>
          </TouchableOpacity>
        </View>
      </BottomSheet >
    )
}

const styles = StyleSheet.create({
    
})

export default ActionsSheet;