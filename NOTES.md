#### Route Guard

- which side of the route guard is the login route on (secure/ unsecure?).
- **_on refresh is the route switching to unsecured route?_**

#### Hapi and Angular ssr handling

- does hapi handle the ssr?

#### Serving Universal Locally

- does ng serve --prod work in pro+ environment?

#### Next Steps

- Releastic create a session that logs in and logs out
- Perform a better api call and slow the network to help simulate issue
- Test forward and backward buttons

#### SETUP

- npm install --legacy-peer-deps (need to fix angular CLI)
- npm install --save @angular/platform-server @nguniversal/module-map-ngfactory-loader ts-loader@3.5.0 express --force
- ng generate universal angular-universal-app --force
