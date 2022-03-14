# bonline-test

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Todo list

- add Profile Photo
- filter the date to 22 March 2022
- when accountData.payment_method: 'DD' then dont render the Guide or button
- when clicking the Switch to Direct Debit update the accountData.payment_method: 'DD' and remove the guide and button
- Build out a database for the billing history
- Conditionally render it in a Table in the BillingHistory component
- when clicking pay now add the "transaction" and make the balance value zero
- add a button to add a "random" invoice through functions and update the balance
