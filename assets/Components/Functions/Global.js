import React from 'react'

export const changeNS = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+".00"
}