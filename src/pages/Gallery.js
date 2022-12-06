import '../css/gallery.css'


const Gallery = () => {

    const imageList = [
        'tv1','tv2','tv3','tv4','tv5','tv6','tv7','tv8',
        'head1','head2','head3',
        'o1','o2','o3','o4','o5','o6','o7','o8','o9','o10',
        'hot1','hot2','hot3','hot4','hot5','hot6','hot7','hot8',
        'estate1','estate2','estate3','estate4','estate5','estate6','estate7','estate8','estate9','estate11','estate12','estate13','estate14',
        'res1','res2','res3','res4','res5','res6','res7','res8','res9','res10','res11','res12','res13','res14','res15','res16','res17','res18','res19','res20',
        'van1','van2','van3','van4','van5','van6','van7','van8',
        'pedestal1','pedestal2','pedestal3',
        'bulk1','bulk2','bulk3','bulk4','bulk5',
        'dev1', 'dev2', 'dev3' ,'dev4', 'dev5', 'dev6' ,'dev7', 'dev8', 'dev9' ,
        ]
    const getImage = (image) => {
        return (<div key={image} className='img'><img src={require(`../gallery/${image}.jpg`)} alt={image} /></div>)
     }

    return ( 
        <div className="gallery">
            <div className="gallery-top">
                <h3>OUR GALLERY</h3>
            </div>
            <div className="gallery-btm">
                {
                    imageList.map((img) => {
                        return getImage(img)
                     })
                }
            </div>
        </div>
     );
}
 
export default Gallery;