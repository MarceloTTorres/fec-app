# fec-app

Criando o ambiente para desenvolvimento

1. instalar o node.js para baixa o resto por npm
2. instalar ionic e cordova: npm install -g ionic cordova
3. instalar angular e typescript: npm install -g @angular/cli
                                  npm install -g typescript
4. após baixar o projeto, rodar no diretório do projeto para baixar as dependências: npm install
5. configurar extensão do fb (obter info com Julio Bottesini): ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="XXXXX" --variable APP_NAME="XXXXXX"
6. instalar plugin fb: npm install --save @ionic-native/facebook
7. instalar o cordova nativo: npm i -g native-run
8. rodar pelo cordova: ionic cordova run browser