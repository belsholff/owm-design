To start an new front app with minimal confiuration, use 

``` bash
ng new app -p owm --minimal=true --routing=true --skipGit=true --skipTests=true --style=scss --directory=./  --inlineStyle=false  --inlineTemplate=false 
```

To serve this dev server use 

``` bash
ng serve --host=0.0.0.0 --disable-host-check
```

To redirect an open local port for to another, use `socat` (`apt install -y socat`)

```
socat -v tcp-listen:60017,reuseaddr,fork tcp:localhost:80
```