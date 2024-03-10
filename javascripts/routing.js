function routing(app)
{
    app.get('^/$|/index(.html)?', (req, res) => {
        res.sendFile(getPath('index'));
    });
    
    app.get('/page1(.html)?', (req, res) => {
        res.sendFile(getPath('page1'));
    });
    
    app.get('/page2(.html)?', (req, res) => {
        res.sendFile(getPath('page2'));
    });
    
    app.get('/page3(.html)?', (req, res) => {
        res.sendFile(getPath('page3'));
    });
    
    app.get('/page4(.html)?', (req, res) => {
        res.sendFile(getPath('page4'));
    });
    
    app.get('/page5(.html)?', (req, res) => {
        res.redirect(200,'/page1');
    });
    
    //Route handlers
    app.get('/hello', (req, res, next) => {
        console.log('I will write HELLO NOW!...')
        next()
    }, (req, res) => {
        res.send('Hi :D')
    })
    
    app.get('/*', (req, res) => {
        console.log("There is no page about this, HAHAHAH LOSER!");
        res.status(404).sendFile(getPath('404'));
    });
    
    app.use(express.urlencoded({extended: false}));
    
    app.use(express.json());
    
    app.use(express.static('/public'));
}