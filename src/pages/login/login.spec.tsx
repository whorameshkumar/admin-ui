import {it, describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import LoginPage from './login';
describe('Login page', () => {
    it('should render with required fields', () => {
        render(<LoginPage/>);
        /* ab screen method hum ko @testing-library/react library sye mila iss mein getBy, findBy and queryBy walye 3 hotye hain 
        getBy -> agar wo content nhi milta tu wo `throws an error`
        queryBy -> agar wo content nhi milta tu wo `null` return krta hai 
        findBy -> Async operations k liye   */
        expect(screen.getByText(/Sign in/)).toBeInTheDocument(); // /Sign in/ likho yaa phir 'Sign in', both are same. Bs /Sign in/ is regex expression e.g. mene likha `sfjkjn dsj kfnSign in kd df gg`, kyn k sign in iss string mein para hai tu test pass. 
        expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(screen.getByRole('button',{name:'Log in'})).toBeInTheDocument(); // means button tag k ander text 'Log in' hona chaiye tu test pass
        expect(screen.getByRole('checkbox', {name:'Remember me'})).toBeInTheDocument(); // means checkbox tag k ander text 'Remember me' hona chaiye
        expect(screen.getByText('Forgot password')).toBeInTheDocument();
    })
}) 