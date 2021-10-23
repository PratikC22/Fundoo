import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SignIn from 'src/components/signIn/signIn'

Enzyme.configure({ adapter: new Adapter() });

const signInComponent = shallow(<SignIn />);

describe('Test if SignIn loading correctly', () => {

    it("test if bookstore image and text container is loading", () => {
        expect(signInComponent.find('.signin-google-logo').exists()).toBe(true)
    });

    it("Sign in header and sub header is loading", () => {
        expect(signInComponent.find('.signin-header-sub-header-text').exists()).toBe(true)
    })

    it("sign in button is loading", () => {
        expect(signInComponent.find('.signin-btn').exists()).toBe(true)
    })
})
