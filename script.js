const userName = prompt('Ismingizni kiriting')
const names = prompt('bironta harf kriting')


if (userName.includes(`${names}`)) {
    alert(` ${userName} ismida ${names} harf bor`)
}  else {
    alert(` ${userName} ismida ${names} harf bor emas`)
   }

