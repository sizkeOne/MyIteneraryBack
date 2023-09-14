const Cities  = [
    {
      "photo": "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg",
      "nameCity": "New York",
      "country": "United States",
      "name": "New York",
       "description": "New York is an iconic and diverse global metropolis, renowned for its impressive skyline, vibrant cultural scene, and central role in finance, art, and cosmopolitan life.",
      "population": "8537673",
      "language": "English"
    },
    {
      "photo": "https://i0.wp.com/www.pasaporteparaviajar.com/wp-content/uploads/2016/09/thumb_IMG_8404_1024.jpg?fit=810%2C540&ssl=1",
      "nameCity": "Tokyo",
      "country": "Japon",
      "name": "Tokyo",
      "description": "Tokyo is a bustling and futuristic megacity, famed for its cutting-edge technology, unique blend of tradition and modernity, and its status as a global hub for business, culture, and innovation.",
      "population": "13929286",
      "language": "Japanese"
    },
    {
      "photo": "https://southjets.com/wp-content/uploads/2019/05/br_gru_ciudad_2880_1620_03-1.jpg",
      "nameCity": "Sao Paulo",
      "country": "Brasil",
      "name": "Sao Paulo",
      "description": "Sao Paulo is a dynamic and sprawling megacity in Brazil, known for its energetic cultural scene, diverse population, and significant influence on the country's economy, arts, and urban lifestyle.",
      "population": "12252023",
      "language": "Portuguese"
    },
    {
      "photo": "https://images.memphistours.com/large/454427291_History-of-Mumbai.jpg",
      "nameCity": "Mumbai",
      "country": "India",
      "name": "Mumbai",
      "description": "Mumbai is a bustling metropolis in India, renowned for its thriving film industry, bustling markets, and rich cultural tapestry, all set against the backdrop of its status as a major financial and economic hub.",
      "population": "20411171",
      "language": "Hindi"
    },
    {
      "photo": "https://static.ffx.io/images/$zoom_0.3780945236309078%2C$multiply_0.6825%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/fb95eca49cf3f2af57455b1358f1ec39193ce256",
      "nameCity": "London",
      "country": "Londres",
      "name": "London",
      "description": "London is a historic and cosmopolitan capital, celebrated for its iconic landmarks, diverse population, and global significance in finance, fashion, arts, and culture.",
      "population": "8825001",
      "language": "English"
    },
    {
      "photo": "https://content.r9cdn.net/rimg/dimg/9b/2d/0aeefb46-city-53588-162aa932673.jpg?width=1200&height=630&xhint=1388&yhint=923&crop=true",
      "nameCity": "Mexico City",
      "name": "Mexico City",
      "country": "Mexico",
      "description": "Mexico City is a vibrant and lively urban center, famous for its ancient Aztec roots, colorful markets, and bustling street life, while also serving as the political, cultural, and economic heart of Mexico.",
      "population": "8918653",
      "language": "Spanish"
    },
    {
      "photo": "  https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Beijing-2.jpg",
      "nameCity": "Beijing",
       "name": "Beijing",
       "country": "China",
       "description": "Beijing is a historic and rapidly modernizing metropolis, known for its ancient landmarks such as the Great Wall and the Forbidden City, as well as its pivotal role as the political, cultural, and educational capital of China.",
      "population": "21710000",
      "language": "Chinese (Mandarin)"
    },
    {
      "photo": "https://uceap.universityofcalifornia.edu/sites/default/files/marketing-images/program-page-images/chinese-in-beijing-glance.jpg",
      "nameCity": "Cairo",
      "country": "Egipt",
      "name": "Cairo",
      "description": "Cairo is a captivating and ancient city, renowned for its iconic pyramids, bustling bazaars, and rich historical heritage, all situated along the banks of the iconic Nile River.",
      "population": "20076000",
      "language": "Arabic"
    },
    {
      "photo": "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/dtceexjjoji0w1ikkp2k",
      "nameCity": "Rio de Janeiro",
      "country": "Brasil",
      "name": "Rio de Janeiro",
      "description": "Rio de Janeiro is a vibrant and picturesque coastal city, famous for its stunning beaches, lively Carnival celebrations, and iconic Christ the Redeemer statue, encapsulating the lively spirit of Brazil.",
      "population": "6718903",
      "language": "Portuguese"
    },
    {
      "photo": "https://a.cdn-hotels.com/gdcs/production83/d1841/31bacf88-f70e-4fae-b028-4fd7f7546075.jpg",
      "nameCity": "Moscow",
      "country": "Rusia",
       "name": "Moscow",
       "description": "Moscow is the historic capital of Russia, distinguished by its iconic Red Square, intricate architecture, and influential role in politics, culture, and global affairs.",
      "population": "12506468",
      "language": "Russian"
    },
    {
      "photo": "https://static.independent.co.uk/2023/06/30/09/iStock-1418186354.jpg",
      "nameCity": "Istanbul",
      "country": "Turquia",
      "name": "Istanbul",
      "description": "Istanbul is a captivating city straddling two continents, celebrated for its stunning blend of East and West, showcased through its historic architecture, bustling bazaars, and rich cultural heritage.",
      "population": "15029231",
      "language": "Turkish"
    },
    {
      "photo": "https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg",
      "nameCity": "Bangkok",
      "country": "Tailandia",
      "name": "Bangkok",
      "description": "Bangkok is a vibrant city in Thailand, known for its ornate temples, bustling street life, and dynamic blend of traditional and modern cultures",
      "population": "8280925",
      "language": "Thai"
    },
    {
      "photo": "https://viajes.nationalgeographic.com.es/medio/2022/07/13/paris_37bc088a_1280x720.jpg",
      "nameCity": "Paris",
      "country": "Francia",
      "name": "Paris",
      "description": "Paris is the romantic and artistic capital of France, renowned for its iconic Eiffel Tower, exquisite cuisine, and influential contributions to fashion, art, and global culture.",
      "population": "2140526",
      "language": "French"
    },
    {
      "photo": "https://ktla.com/wp-content/uploads/sites/4/2022/12/GettyImages-1346202245.jpg",
      "nameCity": "Los Angeles",
      "country": "United States",
       "name": "Los Angeles",
       "description": "Los Angeles is a sprawling city in California, famous for its entertainment industry, diverse neighborhoods, and iconic landmarks like the Hollywood Sign and Santa Monica Pier.",
      "population": "3990456",
      "language": "English"
    },
      {
        "photo": "https://static.independent.co.uk/2022/12/29/14/iStock-464629385.jpg",
        "nameCity": "Seoul",
        "name": "Seoul",
        "country": "Corea",
        "description": "Seoul is a dynamic and modern metropolis in South Korea, distinguished by its futuristic architecture, vibrant street food scene, and rich blend of traditional and contemporary culture.",
        "population": "9720846",
        "language": "Korean"
      }
  ]

  export default Cities