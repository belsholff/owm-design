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
            { name: "PORTFÓLIO", url: "portfólio" },
            { name: "ORÇAMENTO", url: "orçamento" },
            { name: "FREEBIES", url: "freebies" },
        ],
    };

    public imggrid1 : any = {
        columnsPerSize : { sm: 1, md: 1, lg: 3 },
        loadItemsPerSize: { sm: 3, md: 3, lg: 3 },
        interactiveMode: true,
        expansiveGrid: false,
        items: [
            {
                thumb: `https://picsum.photos/id/${rand}/21/16`, url: `https://picsum.photos/id/${rand}/635/475`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/21/16`, url: `https://picsum.photos/id/${rand}/635/475`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/21/16`, url: `https://picsum.photos/id/${rand}/635/475`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/21/16`, url: `https://picsum.photos/id/${rand}/635/475`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/21/16`, url: `https://picsum.photos/id/${rand}/635/475`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/21/16`, url: `https://picsum.photos/id/${rand}/635/475`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
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
        interactiveMode: true,
        expansiveGrid: true,
        items: [
            {
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '2']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '3']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '4']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: ['portfólio', 'item', '1']
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
        interactiveMode: false,
        expansiveGrid: false,
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
        ]
    }
}
