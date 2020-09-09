let rand: number = Math.floor(Math.random() * 1000);
export class SiteSettingsService {
    public cover : any = {
        backgroundColor: "white",
        opacity: 0.1,
        coverContent: true,
    };

    public header : any = {
        items: [
            { name: "HOME", url: "" },
            { name: "PORTFÓLIO", url: "portfolio" },
            { name: "ORÇAMENTO", url: "orçamento" },
            { name: "FREEBIES", url: "freebies" },
        ],
    };

    public imggrid1 : any = {
        columnsPerSize : { sm: 1, md: 1, lg: 3 },
        loadItemsPerSize: { sm: 3, md: 3, lg: 3 },
        height: { sm: '35vh', md: '38vh', lg: '48vh' },
        interactiveMode: true,
        expansiveGrid: false,
        carouselMode: false,
        items: [
            {
                thumb: `https://picsum.photos/id/${rand}/21/16`, url: `https://picsum.photos/id/${rand}/635/475`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "pagina1"
            },{
                thumb: `https://picsum.photos/id/${rand}/21/16`, url: `https://picsum.photos/id/${rand}/635/475`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "pagina1"
            },{
                thumb: `https://picsum.photos/id/${rand}/21/16`, url: `https://picsum.photos/id/${rand}/635/475`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "pagina1"
            },{
                thumb: `https://picsum.photos/id/${rand}/21/16`, url: `https://picsum.photos/id/${rand}/635/475`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "pagina1"
            },{
                thumb: `https://picsum.photos/id/${rand}/21/16`, url: `https://picsum.photos/id/${rand}/635/475`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "pagina1"
            },{
                thumb: `https://picsum.photos/id/${rand}/21/16`, url: `https://picsum.photos/id/${rand}/635/475`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "pagina1"
            },
        ],
    };

    public txtgrid1 : any = {
        columnsPerSize : { sm: 1, md: 1, lg: 3 },
        loadItemsPerSize: { sm: 3, md: 3, lg: 3 },
        items: [
            {
                title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
            },{
                title: "Lorem Ipsdois", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
            },{
                title: "Lorem Ipstrês", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
            },
        ]
    };

    public imggrid2 : any = {
        columnsPerSize : { sm: 1, md: 2, lg: 4 },
        loadItemsPerSize: { sm: 3, md: 4, lg: 8 },
        height: { sm: '35vh', md: '38vh', lg: '48vh' },
        interactiveMode: true,
        expansiveGrid: true,
        carouselMode: false,
        items: [
            {
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '2']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '3']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '4']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfolio', 'item', '1']
            },
        ]
    };

    public jtronbtn : any = {
        title: 'Solicitar Orçamento',
        anchor: 'orçamento',
    };

    public footer : any = {
        socialMedias: [
            { name: "Instagram", url: "https://instagram.com/owm-design/", faIcon: "faInstagram" },
            { name: "Behance", url: "https://behance.net/owm-design/", faIcon: "faBehance" },
        ],
        copyright: "All Rights Reserved",
        bottomText: "Designed & Developed by OWM Design"
    }

    public portfoliogrid1 : any = {
        columnsPerSize : { sm: 1, md: 1, lg: 1 },
        loadItemsPerSize: { sm: 6, md: 6, lg: 6 },
        height: { sm: '40vh', md: '45vh', lg: '90vh' },
        interactiveMode: false,
        expansiveGrid: false,
        carouselMode: false,
        items: [
            {
                name: "primeiro", url: `https://picsum.photos/id/${rand + 1}/1400/1087`, thumb: `https://picsum.photos/id/${rand + 1}/48/38`
            },{
                name: "segundo", url: `https://picsum.photos/id/${rand + 2}/1400/1087`, thumb: `https://picsum.photos/id/${rand + 2}/48/38`
            },{
                name: "terceiro", url: `https://picsum.photos/id/${rand + 3}/1400/1087`, thumb: `https://picsum.photos/id/${rand + 3}/48/38`
            },{
                name: "quarto", url: `https://picsum.photos/id/${rand + 4}/1400/1087`, thumb: `https://picsum.photos/id/${rand + 4}/48/38`
            },{
                name: "quinto", url: `https://picsum.photos/id/${rand + 5}/1400/1087`, thumb: `https://picsum.photos/id/${rand + 5}/48/38`
            },{
                name: "sexto", url: `https://picsum.photos/id/${rand + 6}/1400/1087`, thumb: `https://picsum.photos/id/${rand + 6}/48/38`
            }
        ],
    }

    public portfoliotxtgrid1 : any = {
        columnsPerSize : { sm: 1, md: 1, lg: 1 },
        loadItemsPerSize: { sm: 1, md: 1, lg: 1 },
        items: [
            {
                title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
            }
        ]
    };

    public portfoliogrid2 : any = {
        columnsPerSize : { sm: 1, md: 1, lg: 4 },
        loadItemsPerSize: { sm: 14, md: 14, lg: 14 },
        height: { sm: '35vh', md: '38vh', lg: '41vh' },
        interactiveMode: true,
        expansiveGrid: false,
        carouselMode: true,
        items: [
            {
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", url: `https://picsum.photos/id/${rand + 1}/645/483`,
                anchor: ['portfolio', 'item', '1'], thumb: `https://picsum.photos/id/${rand + 1}/22/17`
            },{
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", url: `https://picsum.photos/id/${rand + 2}/645/483`,
                anchor: ['portfolio', 'item', '1'], thumb: `https://picsum.photos/id/${rand + 2}/22/17`
            },{
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", url: `https://picsum.photos/id/${rand + 3}/645/483`,
                anchor: ['portfolio', 'item', '1'], thumb: `https://picsum.photos/id/${rand + 3}/22/17`
            },{
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", url: `https://picsum.photos/id/${rand + 4}/645/483`,
                anchor: ['portfolio', 'item', '1'], thumb: `https://picsum.photos/id/${rand + 4}/22/17`
            },{
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", url: `https://picsum.photos/id/${rand + 5}/645/483`,
                anchor: ['portfolio', 'item', '1'], thumb: `https://picsum.photos/id/${rand + 5}/22/17`
            },{
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", url: `https://picsum.photos/id/${rand + 6}/645/483`,
                anchor: ['portfolio', 'item', '1'], thumb: `https://picsum.photos/id/${rand + 6}/22/17`
            },{
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", url: `https://picsum.photos/id/${rand + 7}/645/483`,
                anchor: ['portfolio', 'item', '1'], thumb: `https://picsum.photos/id/${rand + 7}/22/17`
            },{
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", url: `https://picsum.photos/id/${rand + 8}/645/483`,
                anchor: ['portfolio', 'item', '1'], thumb: `https://picsum.photos/id/${rand + 8}/22/17`
            },{
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", url: `https://picsum.photos/id/${rand + 9}/645/483`,
                anchor: ['portfolio', 'item', '1'], thumb: `https://picsum.photos/id/${rand + 9}/22/17`
            },{
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", url: `https://picsum.photos/id/${rand + 10}/645/483`,
                anchor: ['portfolio', 'item', '1'], thumb: `https://picsum.photos/id/${rand + 10}/22/17`
            },{
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", url: `https://picsum.photos/id/${rand + 11}/645/483`,
                anchor: ['portfolio', 'item', '1'], thumb: `https://picsum.photos/id/${rand + 11}/22/17`
            },{
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", url: `https://picsum.photos/id/${rand + 12}/645/483`,
                anchor: ['portfolio', 'item', '1'], thumb: `https://picsum.photos/id/${rand + 12}/22/17`
            },{
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", url: `https://picsum.photos/id/${rand + 13}/645/483`,
                anchor: ['portfolio', 'item', '1'], thumb: `https://picsum.photos/id/${rand + 13}/22/17`
            },{
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", url: `https://picsum.photos/id/${rand + 14}/645/483`,
                anchor: ['portfolio', 'item', '1'], thumb: `https://picsum.photos/id/${rand + 14}/22/17`
            },

        ],
    }
}
