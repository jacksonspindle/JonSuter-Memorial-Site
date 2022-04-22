import React, { useState } from 'react'
import LandingPage from './LandingPage'

export default function Gallery() {
    const [photoSize, setPhotoSize] = useState('')
    const [photo2Size, setPhoto2Size] = useState('')
    const [photo3Size, setPhoto3Size] = useState('')
    const [photo4Size, setPhoto4Size] = useState('')
    const [photo5Size, setPhoto5Size] = useState('')
    const [photo6Size, setPhoto6Size] = useState('')
    const [photo7Size, setPhoto7Size] = useState('')
    const [photo8Size, setPhoto8Size] = useState('')
    const [photo9Size, setPhoto9Size] = useState('')

    const [photoPreviewState, setPhotoPreviewState] = useState("none")
    const [photoPreview, setPhotoPreview] = useState(0)

    const selectedImage = [
        './suter.jpg', 
        './suter2.png', 
        './suter3.png', 
        './suter4.png', 
        './suter5.png', 
        './suter6.png', 
        './suter7.png', 
        './suter8.png', 
        './suter9.png', 
        
    ]

    const gallery = <div className='imageGallery'>
                    <img src={selectedImage[0]} width="100%" onClick={() => {setPhotoPreviewState("flex"); setPhotoPreview(0); setGalleryState(<div></div>)}}></img>
                    <img src={selectedImage[1]} width="100%" onClick={() => {setPhotoPreviewState("flex"); setPhotoPreview(1); setGalleryState(<div></div>)}}></img>
                    <img src={selectedImage[2]} width="100%" onClick={() => {setPhotoPreviewState("flex"); setPhotoPreview(2); setGalleryState(<div></div>)}}></img>
                    <img src={selectedImage[3]} width="100%" onClick={() => {setPhotoPreviewState("flex"); setPhotoPreview(3); setGalleryState(<div></div>)}}></img>
                    <img src={selectedImage[4]} width="100%" onClick={() => {setPhotoPreviewState("flex"); setPhotoPreview(4); setGalleryState(<div></div>)}}></img>
                    <img src={selectedImage[5]} width="100%" onClick={() => {setPhotoPreviewState("flex"); setPhotoPreview(5); setGalleryState(<div></div>)}}></img>
                    <img src={selectedImage[6]} width="100%" onClick={() => {setPhotoPreviewState("flex"); setPhotoPreview(6); setGalleryState(<div></div>)}}></img>
                    <img src={selectedImage[7]} width="100%" onClick={() => {setPhotoPreviewState("flex"); setPhotoPreview(7); setGalleryState(<div></div>)}}></img>
                    <img src={selectedImage[8]} width="100%" onClick={() => {setPhotoPreviewState("flex"); setPhotoPreview(8); setGalleryState(<div></div>)}}></img>
                    <img src={selectedImage[9]} width="100%" onClick={() => {setPhotoPreviewState("flex"); setPhotoPreview(9); setGalleryState(<div></div>)}}></img>
                </div>

    const [galleryState, setGalleryState] = useState([gallery])

    return (
        <div>
                <div className='previewPhoto' style={{"display": photoPreviewState}} onClick={() => {setPhotoPreviewState("none"); setGalleryState(gallery)}}>
                    <div>
                    <div className='previewPhotoHeader'>
                        <img src={selectedImage[photoPreview]} width={350} className='selected-image'></img>
                    </div>
                    
                    </div>
                </div> 
                <div className='galleryContainer'>
                <h1 className='galleryHeader'>JON SUTER</h1>

                {galleryState}
            </div>
        </div>
    )
}