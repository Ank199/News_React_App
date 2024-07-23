import React, { Component } from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  articles = [
    {
      source: {
        id: "cbc-news",
        name: "CBC News",
      },
      author: "CBC News",
      title:
        "CBC.ca - watch, listen, and discover with Canada's Public Broadcaster",
      description:
        "Canada's home for News, Entertainment, Sports, Music and much more",
      url: "http://www.cbc.ca/",
      urlToImage:
        "https://i.cbc.ca/1.4066392.1541713557!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/cbc-logo-horizontal.jpg",
      publishedAt: "2024-06-01T06:07:10.1059077Z",
      content: null,
    },
    {
      source: {
        id: "bild",
        name: "Bild",
      },
      author: "Robert Schreier",
      title:
        "Frauenfußball: Deutschland gewinnen, aber Alexandra Popp muss raus | Sport",
      description:
        "Nationalelf müht sich, Bundestrainer Hrubesch ergreift ungewöhnliche Maßnahme.",
      url: "https://www.bild.de/sport/fussball/frauenfussball-deutschland-gewinnen-aber-alexandra-popp-muss-raus-665a2e04c34cbc2d431bec8d",
      urlToImage:
        "https://images.bild.de/665a2e04c34cbc2d431bec8d/084827019aa70c4b5c4e5114a1eb7753,216e9357?w=1280",
      publishedAt: "2024-06-01T05:43:23Z",
      content:
        "Nanu, was ist denn da los? \r\nDie deutschen Fußballerinnen kamen im EM-Quali-Spiel gegen Polen mit einem blauen Auge davon. In einem durchwachsenen Auftritt mühte sich der Tabellenführer gegen den -le… [+1579 chars]",
    },
    {
      source: {
        id: "bild",
        name: "Bild",
      },
      author: "Hendrik Deck",
      title:
        "Reiten: Nach Tod von Georgie Campbell (†36) – Emotionale Botschaft vom Ehemann | Sport",
      description:
        "Trauer um Reit-Star Georgie Campbell. Diese Botschaft von ihrem Ehemann ist mehr als rührend.",
      url: "https://www.bild.de/sport/reiten-nach-tod-von-georgie-campbell-36-emotionale-botschaft-vom-ehemann-6659a5fc3c6876087f911755",
      urlToImage:
        "https://images.bild.de/6659a5fc3c6876087f911755/70ee9387a7f2d09d1561cdb65f871947,4da3479b?w=1280",
      publishedAt: "2024-06-01T05:42:51Z",
      content:
        "Diese Botschaft ist mehr als rührend ...\r\nVor einer Woche hat ein Unfall die Sport-Welt erschüttert. Die Vielseitigkeitsreiterin Georgie Campbell ist beim Bicton Horse Trials gestürzt und erlitt dabe… [+2195 chars]",
    },
    {
      source: {
        id: "bild",
        name: "Bild",
      },
      author: "Markus Langner",
      title: "Boxen: Megafight von Mike Tyson (57) vorerst geplatzt | Sport",
      description:
        "Der Megafight von Box-Legende Mike-Tyson (57) gegen Youtuber Jake Paul (27) am 20. Juli ist geplatzt – zumindest vorerst.",
      url: "https://www.bild.de/sport/mehr-sport/boxen-megafight-von-mike-tyson-57-vorerst-geplatzt-665a4a11a1a82a31bf67f538",
      urlToImage:
        "https://images.bild.de/665a4a11a1a82a31bf67f538/deeaf5f609df918ae580e6d3a2423243,99c974e9?w=1280",
      publishedAt: "2024-06-01T05:41:48Z",
      content:
        "Der Megafight von Box-Legende Mike-Tyson (57) gegen Youtuber Jake Paul (27) am 20. Juli ist geplatzt zumindest vorerst. Nachdem Iron-Mike am Sonntag in einem Flugzeug einen medizinischen Schock erlit… [+2311 chars]",
    },
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title:
        "Wales vs Ukraine: UEFA Women's Championship qualification - BBC Sport",
      description:
        "Follow live text commentary, score updates and match stats from Wales vs Ukraine in the UEFA Women's Championship Qualification.",
      url: "http://www.bbc.co.uk/sport/football/live/c9rrk1lw62pt",
      urlToImage:
        "https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png",
      publishedAt: "2024-05-31T21:07:22.7304099Z",
      content:
        "Wilkinson acted decisively at half-time as McAteer and Morgan were replaced by Rachel Rowe and Kayleigh Barton, but Wales lacked the fluidity they showed in their opening two Euro qualifiers.\r\nMost o… [+853 chars]",
    },
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title:
        "Republic of Ireland vs Sweden: UEFA Women's Championship Qualification - BBC Sport",
      description:
        "Follow live text commentary, score updates and match stats from Republic of Ireland vs Sweden in the UEFA Women's Championship Qualification",
      url: "http://www.bbc.co.uk/sport/football/live/c100pzd77l2t",
      urlToImage:
        "https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png",
      publishedAt: "2024-05-31T21:07:20.4028641Z",
      content:
        "Republic of Ireland lost their third consecutive Euro 2025 qualifier as they fell 3-0 to Sweden at the Aviva Stadium. \r\nIn front of a crowd of over 22,000, Eileen Gleeson's side made a promising star… [+1291 chars]",
    },
    {
      source: {
        id: "polygon",
        name: "Polygon",
      },
      author: "Austen Goslin",
      title:
        "EA’s College Football 25 has tons of new features unique to college",
      description:
        "EA Sport College Football 25 had its biggest reveal yet, including all the new features for the franchise, and a few that make it very different from Madden.",
      url: "https://www.polygon.com/24168832/ea-sports-college-football-25-new-features-like-madden",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/Vv1dYm1HPQKCp4s8H6nSeumXBqc=/0x0:1456x762/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25472771/cfb25.png",
      publishedAt: "2024-05-31T19:01:01Z",
      content:
        "Summer is only just starting, but college football fans are already itching to head back to campus in EA Sports College Football 25. The upcoming game marks the franchises return after almost 10 year… [+2930 chars]",
    },
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title:
        "Watch Scotland vs Israel: Uefa Women's Championship Qualification - BBC Sport",
      description:
        "Watch Sportscene, and follow live text commentary, score updates and match stats from Scotland vs Israel in the Uefa Women's Championship qualification.",
      url: "http://www.bbc.co.uk/sport/football/live/c4nn9427j7zt",
      urlToImage:
        "https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png",
      publishedAt: "2024-05-31T17:52:20.4543843Z",
      content:
        "Scotland v Israel (19:05 BST)\r\nScotland: Gibson, Evans, Docherty, Corsie (c), Howard, Kerr, Cuthbert, Cornet, Hanson, Emslie, Howard.\r\nSubstitutes: Fife, Cumings, K Clark, MacLean, Ewens, Howat, Ross… [+254 chars]",
    },
    {
      source: {
        id: "les-echos",
        name: "Les Echos",
      },
      author: "Denis Fainsilber",
      title:
        "Métro : Keolis remporte la bataille de la ligne 18 Orly-Saclay-Versailles",
      description:
        "Ce ne sera pas pour la RATP ou son homologue milanaise. La filiale de transports publics de la SNCF est quasi-assurée de se voir confier l'exploitation de la future ligne 18 du Grand Paris Express, qui reliera notamment Orly à Versailles. La décision finale e…",
      url: "https://www.lesechos.fr/industrie-services/tourisme-transport/metro-keolis-remporte-la-bataille-de-la-ligne-18-orly-saclay-versailles-2098466",
      urlToImage:
        "https://media.lesechos.com/api/v1/images/view/665a0ad8251f7c567306ca4d/1280x720/01101514350082-web-tete.jpg",
      publishedAt: "2024-05-31T17:37:18Z",
      content:
        "La boucle est bouclée pour le futur réseau du métro du Grand Paris Express. Après avoir réparti les futurs contrats d'exploitation des lignes 15, 16 et 17 du prochain réseau du métro automatique Gran… [+3143 chars]",
    },
    {
      source: {
        id: "talksport",
        name: "TalkSport",
      },
      author: "Ben Davies",
      title:
        "Eddie Hearn clarifies view on Simon Jordan to Piers Morgan as he praises talkSPORT show...",
      description:
        "Eddie Hearn has a lot of time for Simon Jordan. In the past, Matchroom Boxing promoter Hearn and talkSPORT host Jordan have shared fascinating and heated debates on a number of boxing topics. But H…",
      url: "https://talksport.com/sport/1810436/eddie-hearn-simon-jordan-piers-morgan/",
      urlToImage:
        "https://talksport.com/wp-content/uploads/sites/5/2024/04/MixCollage-01-Apr-2024-06-44-PM-849-1.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
      publishedAt: "2024-04-01T18:19:39Z",
      content:
        "Eddie Hearn has a lot of time for Simon Jordan.\r\nIn the past, Matchroom Boxing promoter Hearn and talkSPORT host Jordan have shared fascinating and heated debates on a number of boxing topics.\r\nHearn… [+2173 chars]",
    },
    {
      source: {
        id: "fox-sports",
        name: "Fox Sports",
      },
      author: "John Fanta, Michael Cohen",
      title:
        "College basketball roundtable: Michigan State's tourney streak, top transfers and more",
      description:
        "Is Michigan State's NCAA Tournament streak in jeopardy? Who is the top transfer in the nation? FOX Sports' college basketball experts answer that and more.",
      url: "http://www.foxsports.com/stories/college-basketball/college-basketball-roundtable-michigan-states-tourney-streak-top-transfers-and-more",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/02/1408/814/2024-02-29_College-Basketball-Roundtable_16x9.jpg?ve=1&tl=1",
      publishedAt: "2024-02-29T20:59:30Z",
      content:
        "It's almost time, ladies and gentlemen!\r\nThat long-awaited, fun-filled day when you wait to hear your team's name called before breaking out a pen and paper to fill out your NCAA Tournament bracket i… [+17577 chars]",
    },
    {
      source: {
        id: "bleacher-report",
        name: "Bleacher Report",
      },
      author: null,
      title: "New Micah Parsons Show ",
      description:
        "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      url: "https://bleacherreport.com/videos/490566-the-edge-w-micah-parsons-ep-11-vod",
      urlToImage: null,
      publishedAt: "2023-11-27T20:37:24.6381564Z",
      content: null,
    },
    {
      source: {
        id: "bleacher-report",
        name: "Bleacher Report",
      },
      author: null,
      title: " Mikal Bridges Interview ",
      description:
        "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      url: "https://bleacherreport.com/videos/491103-taylor-rooks-x-mikal-bridges-vod",
      urlToImage: null,
      publishedAt: "2023-11-27T20:37:24.3882176Z",
      content: "Nets star sits down with Taylor Rooks for exclusive convo.",
    },
    {
      source: {
        id: "ansa",
        name: "ANSA.it",
      },
      author: "ANSA.it",
      title:
        "Mit, 'impegnati affinché gli italiani non paghino scioperi' - Ultima Ora",
      description:
        'Il ministero dei Trasporti e delle Infrastrutture, guidato da Matteo Salvini, "farà di tutto affinché gli italiani non paghino troppo pesantemente la mobilitazione". (ANSA)',
      url: "http://www.ansa.it/sito/notizie/topnews/2023/07/11/mit-impegnati-affinche-gli-italiani-non-paghino-scioperi_6fbc8cb6-a3fc-469f-935f-4d9273e5ec50.html",
      urlToImage:
        "https://www.ansa.it/webimages/img_700/2022/7/17/d74c98bc5695ae497236c29292735b84.jpg",
      publishedAt: "2023-07-11T16:44:00Z",
      content:
        'Se hai scelto di non accettare i cookie di profilazione e tracciamento, puoi aderire all’abbonamento "Consentless" a un costo molto accessibile, oppure scegliere un altro abbonamento per accedere ad … [+320 chars]',
    },
    {
      source: {
        id: "lequipe",
        name: "L'equipe",
      },
      author: "L'EQUIPE",
      title:
        "Marseille dans un nouveau monde après avoir intégré la Ligue Magnus",
      description:
        "Les Spartiates de Marseille ont rejoint la Ligue Magnus, jeudi. Une grande première. Le club avancera avec prudence. Il est solide, en termes de structures et de finances, mais irrégulier sur le plan sportif. Objectifs : se renforcer et assurer le maintien.",
      url: "https://www.lequipe.fr/Hockey-sur-glace/Actualites/Marseille-dans-un-nouveau-monde-apres-avoir-integre-la-ligue-magnus/1401523",
      urlToImage:
        "https://medias.lequipe.fr/img-photo-jpg/les-marseillais-vont-decouvrir-la-ligue-magnus-c-matteoli-mouhanad-spartiates-de-marseille-d-r/1500000001796012/101:283,1675:1332-640-427-75/ee3a9.jpg",
      publishedAt: "2023-06-08T14:48:14+00:00",
      content:
        "La NHL a ses franchises de Californie et de Floride, mais la Ligue Magnus a aussi son coin de mer et de soleil. Après Nice (en 2016) et Anglet, au tour de Marseille de rejoindre le plus haut niveau d… [+4342 chars]",
    },
    {
      source: {
        id: "the-irish-times",
        name: "The Irish Times",
      },
      author: "Michael McDowell",
      title:
        "Michael McDowell: Car use is not simply the prerogative of the odious and hysterical middle class",
      description:
        "Michael McDowell: Any suggestion that public transport will suffice to sustain the entire transport needs of a vast number of people is fanciful and unrealistic",
      url: "https://www.irishtimes.com/opinion/2023/03/29/car-use-is-not-simply-the-prerogative-of-the-odious-and-hysterical-middle-class/",
      urlToImage:
        "https://www.irishtimes.com/resizer/PjutyV7tTE8E5gbQFWXo3W2Obms=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/KVJU64TMR24AFWPRLNDG3IKSOY.jpg",
      publishedAt: "2023-03-29T04:00:03Z",
      content:
        "There seems to be a vogue for condemning everyone who doesnt share your opinions as being morally reprehensible, selfish, ignorant or a class enemy. Violent language is often used online against peop… [+4638 chars]",
    },
    {
      source: {
        id: "the-hindu",
        name: "The Hindu",
      },
      author: "The Hindu",
      title: "In search of gold: On Tokyo Olympics",
      description:
        "The Olympic Games remain the greatest sporting event for fans and athletes alike",
      url: "https://www.thehindu.com/opinion/editorial/in-search-of-gold-the-hindu-editorial-on-tokyo-olympics-2021/article35478354.ece",
      urlToImage:
        "https://www.thehindu.com/static/theme/default/base/img/og-image.jpg",
      publishedAt: "2021-07-22T18:32:00Z",
      content:
        "A medal can lose its lustre but the athletes sporting immortality is set in stone, such is the enduring allure of triumphs at the Olympics. Even a participant without any titles, is referred to as an… [+2521 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Rajat Pandit",
      title:
        "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China",
      description:
        "India News:  The Army is now exploring the possibility of procuring 350 light tanks, which can also be transported by air, to augment its firepower in high-altitu",
      url: "http://timesofindia.indiatimes.com/india/army-explores-procurement-of-350-light-tanks-for-mountainous-terrain-after-border-standoff-with-china/articleshow/82217825.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-82217908,width-1070,height-580,imgsize-264639,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2021-04-23T08:29:00Z",
      content:
        "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>Army explores procurement of 350 light tanks for mou… [+58 chars]",
    },
    {
      source: {
        id: "wired-de",
        name: "Wired.de",
      },
      author: "GQ",
      title: "Volvo C40 Recharge: Dieses E-SUV schreit nach Sportlichkeit",
      description:
        "Volvo setzt auf emissionsfreies Fahren: Mit dem vollelektrischen C40 Recharge präsentiert der schwedische Automobilhersteller sein zweites E-SUV.",
      url: "https://www.gq-magazin.de/auto-technik/article/volvo-c40-recharge-zweites-e-suv-feiert-premiere",
      urlToImage:
        "https://res.cloudinary.com/wired-de/image/upload/t_teaser_square/v1/0/volvo-c40-recharge-e-auto-neuheit-aufmjpg.jpg",
      publishedAt: "2021-03-03T16:40:18Z",
      content:
        "Im Oktober 2019 stellte Volvo mit dem XC40 Recharge sein erstes Elektroauto vor nun folgt mit dem Volvo C40 Recharge bereits das zweite vollelektrische Modell. Dabei steht das neue E-SUV stellvertret… [+3163 chars]",
    },
    {
      source: {
        id: "wired-de",
        name: "Wired.de",
      },
      author: "Felix J. Strohbach",
      title:
        "Pininfarina Battista E-Hypercar: Stärker als Bugatti, teurer als Bentley",
      description:
        "Exklusiver kann ein Hypercar nicht sein – und das ohne Verbrennungsmotor. Der Pininfarina Battista ist ein E-Sportler mit GT-Komfort.",
      url: "https://www.gq-magazin.de/auto-technik/article/pininfarina-battista-elektrisches-hypercar-leistung-preis-reichweite",
      urlToImage:
        "https://res.cloudinary.com/wired-de/image/upload/t_teaser_square/v1/0/pininfarina-battista-elektrischer-supersportwagen-hypercar-auto-aufmjpg.jpg",
      publishedAt: "2021-03-02T11:33:54Z",
      content:
        "13 Zentimeter liegen beim Pininfarina Battista zwischen Pedal und Bodenblech. Sobald der Fahrer sein Bein durchstreckt, entfesselt er 1.900 PS elektrische Power und in wenigen Sekunden katapultiert i… [+4480 chars]",
    },
  ];

  constructor(props) {
    super(props);
    console.log("I am constructor");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    };
  }
  async componentDidMount(props) {
 

    
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&page=1&pageSize=${this.props.pageSize}&apiKey=e6312e314336498a84ce1a0ce013bec4`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles ,totalResults:parseData.totalResults });
  }

 handlePreviousClick=async()=>{
    console.log("previous");
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&page=${this.state.page - 1}&pageSize=${this.props.pageSize}&apiKey=e6312e314336498a84ce1a0ce013bec4`;
      let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
  
    this.setState({
      page:this.state.page-1,
      articles: parseData.articles , 
    })
  }

  handleNextClick=async()=>{
    console.log("Next");
    if( this.state.page+1  > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{ 
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=e6312e314336498a84ce1a0ce013bec4&page=${this.state.page +1}&pageSize=${this.props.pageSize}&apiKey=e6312e314336498a84ce1a0ce013bec4`;
      let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
  
    this.setState({
      page:this.state.page+1,
      articles: parseData.articles , 
      
    })
  }
  
}

  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h2 className="text-center" >Fox News - Top Headlines</h2>

      { this.state.loading && <Spinner/>}

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  author ={element.author ? element.author:"Unknown"}
                  date={element.publishedAt ? element.publishedAt:" "}
                  source={element.source.name}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark my-2 mx-3"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
            
          </button>
          <button 
            type="button"
            className="btn btn-dark my-2 mx-3"
            onClick={this.handleNextClick}
            disabled={(this.state.page + 1) > Math.ceil(this.state.totalResults / this.props.pageSize)}

          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;