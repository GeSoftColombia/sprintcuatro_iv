const productoModel = ()=> {
    
    var productos = [
        {
            id:1,
            categoriaid: 1,
            nombre: 'Consume',
            descripcion: 'Sopa de Pescado',
            image: 'https://lacomidatipica.com/wp-content/uploads/2019/04/sancocho-.png',
            precio: 10000
        },
        {
            id:2,
            categoriaid: 1,
            nombre: 'Salchipapas',
            descripcion: 'Plato de papas y salchichas fritas',
            image: 'https://imag.bonviveur.com/emplatado-final-de-las-salchipapas.jpg',
            precio: 20000
        },
        {
            id:3,
            categoriaid: 1,
            nombre: 'Hamburguesa',
            descripcion: 'hecho a base de carne molida',
            image: 'https://img.lalr.co/cms/2019/05/31212425/Medell%C3%ADn.jpg.jpg',
            precio: 100000
        },
        {
            id:4,
            categoriaid: 1,
            nombre: 'Pescado',
            descripcion: 'Mojarra 350gr',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/14/b5/03/56/mojarra-frita.jpg',
            precio: 100000
        },
        {
            id:5,
            categoriaid: 1,
            nombre:"Pollo",
            descripcion: "Plato de Pollo Frito",
            precio: 25000,
            image:'https://cdn.colombia.com/gastronomia/2018/11/30/pollo-frito-crujiente-3021.jpg'
        },
        {
            id: 6,
            categoriaid: 1,
            nombre:"Pollo",
            descripcion: "Pechuga de Pollo",
            precio: 25000,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUfKlgNOnw45FJdipOgCtavuM2f-jkWPs9NixdkFVZ6rYNhvmm-t7NiYRXqY7PV-XxeE&usqp=CAU'
        },
        {
            id: 7,
            categoriaid: 1,
            nombre:"Cerdo",
            descripcion: "Lomo de Cerdo",
            precio: 25000,
            image:'https://lacomidatipica.com/wp-content/uploads/2019/04/lomo-de-cerdo-tamarindo-.png'
        },
        {
            id: 8,
            categoriaid: 1,
            nombre:"Carne",
            descripcion: "Carne a la Plancha",
            precio: 35000,
            image:'https://media-cdn.tripadvisor.com/media/photo-s/13/01/61/00/cerdo-asado-pollo-a-la.jpg'
        },
        {
            id: 9,
            categoriaid: 1,
            nombre:"Pescado",
            descripcion: "Mojarra de 500gr",
            precio: 35000,
            image:'https://cdn.colombia.com/gastronomia/2011/07/29/mojarra-frita-1686.gif'
        },
        {
            id: 10,
            categoriaid: 1,
            nombre:"Pescado",
            descripcion: "Mojarra Roja de 500gr",
            precio: 35000,
            image:'https://media-cdn.tripadvisor.com/media/photo-s/0e/cf/b1/68/exquisita-mojarra-frita.jpg'
        },
        {
            id: 11,
            categoriaid: 1,
            nombre:"Camarón",
            descripcion: "Ceviche de Camarón",
            precio: 50000,
            image:'https://cdn.colombia.com/gastronomia/2018/09/25/coctel-de-camaron-2853.jpg'
        },
        {
            id: 12,
            categoriaid: 1,
            nombre:"Pescado",
            descripcion: "Sierra 500gr",
            precio: 50000,
            image:'https://media-cdn.tripadvisor.com/media/photo-s/0f/b0/43/24/sierra-frita.jpg'
        },
        {
            id: 13,
            categoriaid: 1,
            nombre:"Pescado",
            descripcion: "Róbalo 500gr",
            precio: 60000,
            image:'https://i.ytimg.com/vi/7glYi87ElBc/maxresdefault.jpg'
        },
        {
            id: 14,
            categoriaid: 1,
            nombre:"Pescado",
            descripcion: "Cevivhe de Róbalo",
            precio: 50000,
            image:'https://media-cdn.tripadvisor.com/media/photo-s/07/e2/39/39/ceviche-de-robalo.jpg'
        },
        {
            id: 15,
            categoriaid: 1,
            nombre:"Pescado",
            descripcion: "Pargo 500gr",
            precio: 70000,
            image:'https://i.pinimg.com/originals/4d/d2/85/4dd285f5b8a849e6d3e587d2c0f12530.jpg'
        },
        {
            id: 16,
            categoriaid: 1,
            nombre:"Camarón",
            descripcion: "Camarón al ajillo",
            precio: 70000,
            image:'https://cdn.colombia.com/gastronomia/2013/02/12/camarones-al-ajillo-2954.jpg'
        },
        {
            id: 17,
            categoriaid: 1,
            nombre:"Langosta",
            descripcion: "Langosta 500gr",
            precio: 120000,
            image:'https://www.eluniversal.com.co/binrepository/1050x700/0c0/0d0/none/13704/XEMN/la-langosta1_4395962_20210331161807.jpg'
        },
        {
            id: 18,
            categoriaid: 1,
            nombre:"Mariscos",
            descripcion: "Cazuela de Mariscos",
            precio: 80000,
            image:'https://cdn.colombia.com/gastronomia/2011/08/01/cazuela-de-langostinos-1696.gif'
        },
        {
            id: 19,
            categoriaid: 1,
            nombre:"Mariscos",
            descripcion: "Picada Mixta de Mariscos",
            precio: 250000,
            image:'https://5dc93791f535c5b6680b-504f722ff1ef8102127dae26bdb15aa6.ssl.cf1.rackcdn.com/pix_9_1363_243259036_5e61c4589cfdb.jpg'
        },
        {
            id: 20,
            categoriaid: 2,
            nombre:"Bebida Alcoholica",
            descripcion: "Piña Colada",
            precio: 30000,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0bEr2yrVvClLk3YYJn2rLiqzdjkZJsbw50g&usqp=CAU'
        },
        {
            id: 21,
            categoriaid: 2,
            nombre:"Bebida Alcoholica",
            descripcion: "Margarita",
            precio: 30000,
            image:'https://www.tomplanmytrip.com/wp-content/uploads/2021/12/Cocktail-class-cartagena-1.jpg'
        },
        {
            id: 22,
            categoriaid: 2,
            nombre:"Bebida Alcoholica",
            descripcion: "Caipiroska",
            precio: 30000,
            image:'https://cdn.colombia.com/sdi/2022/07/11/dia-internacional-del-mojito-descubra-origen-como-prepararlo-en-casa-1047171-0.jpg'
        },
        {
            id: 23,
            categoriaid: 2,
            nombre:"Bebida Alcoholica",
            descripcion: "Daiquiri",
            precio: 30000,
            image:'http://recetasparathermomix.com/wp-content/uploads/2018/06/daiquiri-fresa.jpg'
        },
        {
            id: 24,
            categoriaid: 2,
            nombre:"Bebida Alcoholica",
            descripcion: "Cuba Libre",
            precio: 30000,
            image:'https://cdn.colombia.com/gastronomia/2011/09/07/cuba-libre-2862.jpg'
        },
        {
            id: 25,
            categoriaid: 2,
            nombre:"Bebida Alcoholica",
            descripcion: "Coco Loco",
            precio: 30000,
            image:'https://thumbs.dreamstime.com/b/c%C3%B3ctel-del-coco-en-la-playa-del-caribe-30354296.jpg'
        },
        {
            id: 26,
            categoriaid: 2,
            nombre:"Bebida Alcoholica",
            descripcion: "Mojito",
            precio: 30000,
            image:'https://media-cdn.tripadvisor.com/media/photo-s/0c/d9/02/72/mojitos.jpg'
        },
        {
            id: 27,
            categoriaid: 2,
            nombre:"Bebida Alcoholica",
            descripcion: "Gintone",
            precio: 30000,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUoe9nqVOHIXxlksv1_wtHv8k_co01zQWWd2XgT1i9XBSaM8t4g1VaIAPxYPH7-K2MJUc&usqp=CAU'
        },
        {
            id: 28,
            categoriaid: 2,
            nombre:"Jugos",
            descripcion: "Limonada de Coco",
            precio: 25000,
            image:'https://laterrazacartagena.com/wp-content/uploads/2021/04/Mesa-de-trabajo-34-80.jpg'
        },
        {
            id: 29,
            categoriaid: 2,
            nombre:"Jugos",
            descripcion: "Limonada Cerezada",
            precio: 10000,
            image:'https://sanchopaisa.com/wp-content/uploads/2020/09/Limonada_cerezada.jpg'
        },
        {
            id: 30,
            categoriaid: 2,
            nombre:"Jugos",
            descripcion: "Limonada Natural",
            precio: 10000,
            image:'https://curiosfera-recetas.com/wp-content/uploads/2016/06/C%C3%B3mo-hacer-limonada.jpg'
        },
        {
            id: 31,
            categoriaid: 2,
            nombre:"Jugos",
            descripcion: "Jugos Naturales",
            precio: 10000,
            image:'https://media-cdn.tripadvisor.com/media/photo-s/11/a9/80/c9/jugos-naturales.jpg'
        },
        {
            id: 32,
            categoriaid: 2,
            nombre:"Cervezas",
            descripcion: "Corona",
            precio: 12000,
            image:'https://d1cft8rz0k7w99.cloudfront.net/n/2/3/e/c/23eced2ed2e7daf78c2b10a1cc0ad680114c2a6f_Liquor_384979_01.jpg'
        },
        {
            id: 33,
            categoriaid: 2,
            nombre:"Cervezas",
            descripcion: "Coronita",
            precio: 10000,
            image:'https://http2.mlstatic.com/D_NQ_NP_747784-MCO48003291406_102021-O.webp'
        },
        {
            id: 34,
            categoriaid: 2,
            nombre:"Cervezas",
            descripcion: "Club Colombia",
            precio: 7000,
            image:'https://laterrazacartagena.com/wp-content/uploads/2021/06/Mesa-de-trabajo-29-80.jpg'
        },
        {
            id: 35,
            categoriaid: 2,
            nombre:"Cervezas",
            descripcion: "Aguila Light",
            precio: 7000,
            image:'https://www.cervezaaguila.com/sites/g/files/yrakuj311/files/2022-02/banner-home-main-mobil_0_0.png'
        },
        {
            id: 36,
            categoriaid: 2,
            nombre:"Cervezas",
            descripcion: "Aguila",
            precio: 6000,
            image:'https://pbs.twimg.com/media/FD7ZgNLWUAECx9Y.jpg'
        },
        {
            id: 37,
            categoriaid: 2,
            nombre:"Gaseosas",
            descripcion: "Gaseosas cualquier marca",
            precio: 5000,
            image:'https://cartagenafantastica.com/wp-content/uploads/2021/06/gaseosas-variedad.jpg'
        },
        {
            id: 38,
            categoriaid: 2,
            nombre:"Jugos",
            descripcion: "Agua de Coco",
            precio: 15000,
            image:'https://grancolombiatours.com/wp-content/uploads/2021/01/cartagena-food-tour-12-870x555.jpg'
        },
        {
            id: 39,
            categoriaid: 2,
            nombre:"Agua",
            descripcion: "Agua Natural",
            precio: 5000,
            image:'https://exitocol.vtexassets.com/arquivos/ids/13174038/Agua-Pura-Sin-Gas-1299743_b.jpg?v=637899423221730000'
        },
        {
            id: 40,
            categoriaid: 2,
            nombre:"Ron",
            descripcion: "Ron Medellin - Caldas - Aguardiente 750 ml",
            precio: 100000,
            image:'https://carulla.vtexassets.com/arquivos/ids/1445970/Ron-Medellin-Anejo-X750ml-32201_a.jpg?v=637270332082770000'
        },
        {
            id: 41,
            categoriaid: 2,
            nombre:"Ron",
            descripcion: "Ron Medellin - Caldas - Aguardiente 375 ml",
            precio: 60000,
            image:'https://exitocol.vtexassets.com/arquivos/ids/2053347/Ron-Medellin-Anejo-X375ml-32191_a.jpg?v=637270335741700000'
        },
        {
            id: 42,
            categoriaid: 3,
            nombre:"Masaje",
            descripcion: "Masaje una hora",
            precio: 160000,
            image:'https://img.freepik.com/fotos-premium/masaje-relajante-ayurvedico-mujer-salud-salon-spa-recibiendo-masajes-playa-vacaciones-hermosa-chica-disfrutando-spa-dia-acostada-procedimiento-tratamiento-mesa-terapeuta-cuello-maestro-masculino_175356-5178.jpg?w=2000'
        },
        {
            id: 43,
            categoriaid: 3,
            nombre:"Masaje",
            descripcion: "Masaje media hora",
            precio: 80000,
            image:'https://media-cdn.tripadvisor.com/media/photo-s/0f/1a/9d/80/masaje-frente-al-mar.jpg'
        },
        {
            id: 44,
            categoriaid: 3,
            nombre:"Masaje",
            descripcion: "Masaje quince minutos",
            precio: 40000,
            image:'https://i.ytimg.com/vi/5LdAF3vC6mw/maxresdefault.jpg'
        },
        {
            id: 45,
            categoriaid: 3,
            nombre:"Snorkel",
            descripcion: "Snorkel al bajo de las tortugas",
            precio: 50000,
            image:'https://denomades.imgix.net/destinos/santa-marta/982/tour-acuario-y-playa-blanca-id982-0903.jpg'
        },
        {
            id: 46,
            categoriaid: 3,
            nombre:"Carpas",
            descripcion: "Carpas vistas al mar",
            precio: 80000,
            image:'https://cr00.epimg.net/radio/imagenes/2020/10/14/cartagena/1602680294_980358_1602680369_noticia_normal.jpg'
        },
        {
            id: 47,
            categoriaid: 3,
            nombre:"Carpas",
            descripcion: "Carpas mitad",
            precio: 70000,
            image:'https://www.eluniversal.com.co/binrepository/1047x700/0c0/0d0/none/13704/SARV/playa-habilitada_3815461_20201031102527.jpg'
        },
        {
            id: 48,
            categoriaid: 3,
            nombre:"Carpas",
            descripcion: "Carpas atrás",
            precio: 50000,
            image:'https://www.eluniversal.com.co/sites/default/files/201201/imagen/carperos_boquilleros_frente_a_hotel.jpg'
        }
    ]
    return productos;
}

export default productoModel;