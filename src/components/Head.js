import React from 'react'

const Head = ({ title, description }) => {

    React.useEffect(() => {
        document.title = `My Employees | ${title}`
        document.querySelector('meta[name=description]').setAttribute('content', description)
    }, [title, description])

    return null
}

export default Head
