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

    public grid1 : any = {
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

    public grid2 : any = {
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
}
