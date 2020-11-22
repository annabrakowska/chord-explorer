export const signupConfig = {
    inputs: [
        { name: "name", required: true, placeholder: "Name", type: "text" },
        { name: "email", required: true, placeholder: "Email", type: "email", pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" },
        { name: "password", required: true, placeholder: "Password", type: "password" }],
    buttons: [
        { label: "Sign Up", background: 'lightblue', type: 'submit' },
        { label: "Sign In", type: "button", background: 'orange', switch: 'signIn' }
    ]
}

export const signinConfig = {
    inputs: [
        { name: "email", required: true, placeholder: "Email", type: "text" },
        { name: "password", required: true, placeholder: "Password", type: "password" }
    ],
    buttons: [{ label: "Sign In", type: "submit", background: 'orange' },
    { label: "Sign Up", type: "button", background: 'lightblue', switch: 'signUp' }]
}

export const signUpTitleConfig = {
    signUp: 'Sign Up',
    signIn: 'Sign In',
    signedIn: 'Welcome'
}