
//const categorias =['Laptops', 'Smartphones', 'Cameras', "Consoles", "Accesories"]
const categories = [
    {id: 1, name:"Laptops", img: "https://media.wired.com/photos/64daad6b4a854832b16fd3bc/master/pass/How-to-Choose-a-Laptop-August-2023-Gear.jpg" },
    {id: 2, name:"Smartphones", img: "https://cdn.thewirecutter.com/wp-content/media/2023/10/smartphone-2048px-4861.jpg?auto=webp&quality=75&width=1024" },
    {id: 3, name:"Cameras", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_aV8hyRQGmWlW-tf9y3d74_rHmiGTEWIdvw&s" },
    {id: 4, name:"Consoles", img: "https://img.asmedia.epimg.net/resizer/v2/ZPBNO4LIWNHJ5NTXG7SH76ZSGA.jpg?auth=5c4e27ff1d01f33b25f9ce68a9040247dc081a4fbbbb5f12e45338b3b10d56ff&width=1472&height=828&smart=true" },
    {id: 5, name:"Accesories", img: "https://img.freepik.com/vector-gratis/conjunto-ilustracion-dibujos-animados-accesorios-telefono-movil-gafas-vr-modelo-3d-funda-telefonos-moviles-cargador-bateria-auriculares-reloj-inteligente-tarjeta-memoria-selfie-stick-tecnologia-concepto-telefono-inteligente_74855-23119.jpg" },
]
function ItemListContainer({greetings}) {
    //console.log(categorias)
  return (
    <>
      <h2>{greetings}</h2>
      {categories.map( category => (
      <div key={category.id} className="card" style={{width: '18rem'}}>
           <img src={category.img} className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">{category.name}</h5>
             <a href="#" className="btn btn-primary">
              Comprar
              </a>
           </div>
           </div>
     ))}     


    </>
  )
}

export default ItemListContainer