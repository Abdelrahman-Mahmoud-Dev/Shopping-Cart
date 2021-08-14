const products = [
    {
        id: 1,
        title: "head phone",
        size: "large",
        imageUrl: "images/waldemar-brandt-i587daq0-FQ-unsplash.jpg",
        qty:1
    },

    {
        id: 2,
        title: "head phone",
        size: "large",
        imageUrl: "images/alex-seinet-8dmtbpJJJ7k-unsplash.jpg",
         qty:1
    },

    {
        id: 3,
        title: " phone",
        size: "meduim",
        imageUrl: "images/natasha-bhogal-m556BEJ-Q5c-unsplash.jpg",
         qty:1
    },
    {
        id: 4,
        title: "flowers",
        size: "small",
        imageUrl: "images/syng-1svC3Ja4dxA-unsplash (1).jpg",
         qty:1
    },
      {
        id: 5,
        title: "gfgfg",
        size: "sfgfgfmall",
        imageUrl: "images/gfgfgsyng-1svC3Ja4dxA-unsplash (1).jpg",
         qty:1
    }

]

localStorage.setItem('products', JSON.stringify(products))

