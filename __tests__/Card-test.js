import React from 'react'
import {create} from 'react-test-renderer'
import Card from '../components/Card'

const tree = create(<Card/>);

test('snapshot', ()=>{
    expect(tree).toMatchSnapshot();
});