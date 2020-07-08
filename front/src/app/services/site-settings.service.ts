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
        interactiveMode: false,
        expansiveGrid: true,
        items: [
            {
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
            },{
                thumb: `https://picsum.photos/id/${rand}/22/17`, url: `https://picsum.photos/id/${rand}/645/483`,
                title: "Pudim", subtitle: "Lorem ipsum dot amet casi enterium.", anchor: "página1"
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
}
