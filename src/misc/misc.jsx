import { useState, useEffect } from "react"

export const dummy = (...inputs) => {}

export const clamp = (num, min, max) => {
    return Math.min(Math.max(num, min), max)
}

export var navigationClassRef = {
    "current": "", 
    "target": "",
    "source": "", 
    update: function(obj) {
        this.current = obj.current
        this.target = obj.target
        this.source = obj.source
    },
    updateCurrent: function(str){
        this.current = str
    },
    updateTarget: function(str) {
        this.target = str
    }, 
    updateSource: function(str) {
        this.source = str
    }
}

export var pausePath = "M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m0-3.984C16.937 47.922 8.1 39.062 8.1 28c0-11.04 8.813-19.922 19.876-19.922c11.039 0 19.921 8.883 19.945 19.922c.023 11.063-8.883 19.922-19.922 19.922m-6.422-11.04h2.227c1.101 0 1.617-.609 1.617-1.5v-14.74c0-.891-.516-1.5-1.617-1.5h-2.227c-1.148 0-1.664.609-1.664 1.5v14.742c0 .89.516 1.5 1.664 1.5m10.594 0h2.226c1.125 0 1.641-.609 1.641-1.5V20.642c0-.891-.516-1.5-1.64-1.5h-2.227c-1.102 0-1.64.609-1.64 1.5v14.742c0 .89.538 1.5 1.64 1.5"
export var playPath = "M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m0-3.984C16.937 47.922 8.1 39.062 8.1 28c0-11.04 8.813-19.922 19.876-19.922c11.039 0 19.921 8.883 19.945 19.922c.023 11.063-8.883 19.922-19.922 19.922m-4.125-11.297l12.539-7.406c.914-.563.89-1.852 0-2.367l-12.54-7.454c-.96-.562-2.226-.117-2.226.938v15.352c0 1.078 1.196 1.546 2.227.937"

export var volumeDownPath = "M15.138 5.824c-.449 0-.905.152-1.356.453l-2.672 1.781c-.753.503-2.206.942-3.11.942-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3 .904 0 2.357.439 3.109.941l2.672 1.781c.451.301.907.453 1.356.453.898.001 1.863-.68 1.863-2.175v-10c0-1.495-.965-2.176-1.862-2.176zm-7.138 9.176c-.552 0-1-.448-1-1v-2c0-.552.448-1 1-1 1.211 0 2.907-.495 4-1.146v6.293c-1.093-.652-2.789-1.147-4-1.147zm7 3l-.006.12-.104-.062-1.89-1.26v-7.596l1.891-1.261.104-.062.005.121v10zM18.292 10.294c-.39.391-.39 1.023.002 1.414.345.345.535.803.535 1.291 0 .489-.19.948-.536 1.294-.391.39-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293c.724-.723 1.122-1.685 1.122-2.708s-.398-1.984-1.123-2.707c-.389-.389-1.023-.391-1.414.002z"
export var volumeUpPath = "M16.706 10.292c-.389-.389-1.023-.391-1.414.002-.39.391-.39 1.023.002 1.414.345.345.535.803.535 1.291 0 .489-.19.948-.536 1.294-.391.39-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293c.724-.723 1.122-1.685 1.122-2.708s-.398-1.984-1.123-2.707zM18.706 8.292c-.391-.389-1.023-.39-1.414.002-.39.391-.39 1.024.002 1.414.879.877 1.363 2.044 1.364 3.287.001 1.246-.484 2.417-1.365 3.298-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293c1.259-1.259 1.952-2.933 1.951-4.713-.001-1.777-.694-3.447-1.952-4.702zM20.706 6.292c-.391-.389-1.023-.39-1.414.002-.39.391-.39 1.024.002 1.414 1.412 1.409 2.191 3.285 2.192 5.284.002 2.002-.777 3.885-2.193 5.301-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293c1.794-1.794 2.781-4.18 2.779-6.717-.001-2.533-.989-4.912-2.78-6.698zM12.138 5.824c-.449 0-.905.152-1.356.453l-2.673 1.782c-.752.502-2.205.941-3.109.941-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3 .904 0 2.357.439 3.109.941l2.672 1.781c.451.301.907.453 1.356.453.898.001 1.863-.68 1.863-2.175v-10c0-1.495-.965-2.176-1.862-2.176zm-7.138 9.176c-.552 0-1-.448-1-1v-2c0-.552.448-1 1-1 1.211 0 2.907-.495 4-1.146v6.293c-1.093-.652-2.789-1.147-4-1.147zm7 3l-.006.12-.104-.062-1.89-1.26v-7.596l1.891-1.261.104-.062.005.121v10z"

export const getWindowWidth = () => {
    // const [windowWidth, setWindowWidth] = useState(
    //     typeof window !== 'undefined' ? window.innerWidth : undefined
    // )
    // useEffect(() => {
    //     if (typeof window === 'undefined') {
    //         return
    //     }
    //     const resizeWindowWidth = () => {
    //         setWindowWidth(window.innerWidth)
    //     }
    //     window.addEventListener("resize", resizeWindowWidth)
    //     resizeWindowWidth()
    //     return () => {
    //         window.removeEventListener("resize", resizeWindowWidth)
    //     }
    // }, [])
    // return windowWidth
    return typeof window !== 'undefined' ? window.innerWidth : undefined
} 

export const getWindowHeight = () => {
    // const [windowHeight, setWindowHeight] = useState(
    //     typeof window !== 'undefined' ? window.innerHeight : undefined
    // )
    // useEffect(() => {
    //     if (typeof window === 'undefined') {
    //         return
    //     }
    //     const resizeWindowHeight = () => {
    //         setWindowHeight(window.innerHeight)
    //     }
    //     window.addEventListener("resize", resizeWindowHeight)
    //     resizeWindowHeight()
    //     return () => {
    //         window.removeEventListener("resize", resizeWindowHeight)
    //     }
    // }, [])
    // return windowHeight
    return typeof window !== 'undefined' ? window.innerHeight : undefined
} 