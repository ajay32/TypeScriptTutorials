// using it the HomeScreen

import React, { createContext, useContext, useState, ReactNode } from 'react';


type MyContextTypes = {
    bg : string,
    color : string
}

type StyleProviderProps = {
    children : ReactNode
}


const context = {
    bg : 'red',
    color : 'black'
}

// GETTER
export const MyContext = createContext<MyContextTypes>(context)

// SETTER
export const StyleProvider = ({children} : StyleProviderProps) => {

    return (
        <MyContext.Provider value={context}>
            {children}
        </MyContext.Provider>
    );

}




// things I need 
// export provider - need to use where we need value as a parent - StyleProviderProps object
// StyleContext -- help us to get value .. work as a getter
// Context - that will define the value  (MyContextType object)
// for typescript we are going define the types for above



// you can access one property at multiple locations

// Avoid Prop Drilling: Context allows you to share values deep within the component tree without having to pass props down manually at every level.
// Theme Management: It's often used for handling UI themes or styles that need to be consistent across the entire application.
// User Authentication: You can store user authentication status and information, making it accessible throughout the application.
// Global State Management: While not a replacement for state management libraries like Redux for complex scenarios, Context can be an effective solution for smaller applications or for certain types of global states.
