import React from 'react'

const LectureDetail = async ({params}:{params:Promise<{slug:string[]}>}) => {
    const { slug } = await params
    
    if(slug?.length==2){
        return(
            <div>
                Lecture 1
            </div>
        )
    }
    if(slug?.length==3){
        return(
            <div>
                Lecture3
            </div>
        )
    }
    
        return(
            <div>Lectures</div>
        )
    
}

export default LectureDetail