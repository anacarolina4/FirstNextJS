import Link from 'next/link';
import '../style.css';

//
function Home() {
    return (
        <html lang='en'>
            <head>
                <meta charset='UTF-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <title>Home</title>
                <link href='https://unpkg.com/boxicons@2.0.8/css/boxicons.min.css' rel='stylesheet'></link>
            </head>
            <body>
                <div className='sidebar'>
                    <div className='logo_content'>
                        <div className='logo'>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACbUlEQVRIS8VVMU8UQRh9bzjcWyqs7AQTlmh3ha3xfsIVdhTeIb20JMacHRpNKKWQ20ITO2wtTEjQRBMLChrYMxJbo9LdHnDzzGxuyHJ3HKdCnGaT3dn3vnnf+94QF7x4wfj4I4JaM12BUHZFSaYaz17aOqvAkQnmd1tVwZQbs0G1untQIm2sQlCOr3F/GMlIBNWvmuRRe0uFoOQB55NW3QGvRWH2PG2dSuCqRKezH98I97LqDUuNmeKiB/Kkjag47d5Vk1YZheJW74n6CDIw0gH5ozuAAMC6jvTEEWaAzXbFCC8EpQCS3Akm89KdIOhWtdGrbS1Jv1F6aA0XKFwRRMq8B2xK4OPabBh7AlcgiGkv3UCCRlQs5TWtJekGpVhkHdAHgVMEDmXtqjG8nu+Dk4pkxcvZJ5EDE1SPo3DDkdz90p4bs1oR8UpjQd1rnGlOrlIKG1F41RdUS9I3glb8/30EeQuic1CG7FMCnxpROFdL2ncge1/EThyFC11JtwF8ViGomsO04q3sCQe6qNvoZRDfOxZLBeqmk2G+2f4p6XI2aLBLcTSx7OWzxAOSLY0Ft/JOGkKAZZDnT9ArEWWfA3h3bhJlTZZZ9Dnjm2yBlygEj/6pyX4Ohth0UeC2oaYk/JC1r/ts2mxXCJUH2nRQ5riGukGT8IwG9yBMCAJoNg1sERZvRx40B5aLil+Z1YhpCCGJdXuoxyejwq5ZMSWxkxtMqhBUvJTDw258fM9tdLmTP3aWRd2EPQ47F47d/fkU+H9x3ZvvTjprzO14Jqid+4VznJRJqy6w4qI8b+W/unDOumtH/T5SD0YFG7TvN+KOwSiVylV8AAAAAElFTkSuQmCC"/>
                            <div className='logo_name'>KauêDev</div>
                        </div>
                        <i className='bx bx-menu' id='btn'></i>
                    </div>
                    <ul className='nav_list'>
                        <li>
                            <i className='bx bx-search'></i>
                            <input type='text' placeholder='Search...' />        
                        </li>

                        <li>
                            <a href='#'>
                                <i className='bx bx-grid-alt'></i>
                                <span className='links_names'>Dashboard</span>
                            </a>
                        </li>

                        <li>
                            <a href='#'>
                                <i className='bx bx-grid-alt'></i>
                                <span className='links_names'>Dashboard</span>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href='#'>
                                <i className='bx bx-grid-alt'></i>
                                <span className='links_names'>Dashboard</span>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href='#'>
                                <i className='bx bx-grid-alt'></i>
                                <span className='links_names'>Dashboard</span>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href='#'>
                                <i className='bx bx-grid-alt'></i>
                                <span className='links_names'>Dashboard</span>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href='#'>
                                <i className='bx bx-grid-alt'></i>
                                <span className='links_names'>Dashboard</span>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href='#'>
                                <i className='bx bx-grid-alt'></i>
                                <span className='links_names'>Dashboard</span>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href='#'>
                                <i className='bx bx-grid-alt'></i>
                                <span className='links_names'>Dashboard</span>
                            </a>
                        </li>
                    </ul> 
                </div>


    
            </body>
        </html>
    )
}

export default Home