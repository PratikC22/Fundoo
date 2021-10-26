import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SignUp from 'src/components/signUp/signUp'

Enzyme.configure({ adapter: new Adapter() });

const signUpComponent = shallow(<SignUp />);

describe('Test if SignUp loading correctly', () => {

    it("test if google logo image and text container is loading", () => {
        expect(signUpComponent.find('.google-logo').exists()).toBe(true)
    });

    it("Sign up header is loading", () => {
        expect(signUpComponent.find('.signup-header-text').exists()).toBe(true)
    })

    it("sign up button is loading", () => {
        expect(signUpComponent.find('.signup-button').exists()).toBe(true)
    })
})