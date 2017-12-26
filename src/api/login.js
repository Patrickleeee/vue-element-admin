import fetch from '@/utils/fetch'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  console.log('username: '.concat(username))
  console.log('password: '.concat(password))
  return fetch({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function logout() {
  return fetch({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function sendRq() {
  return fetch({
    url: '/workflow/1c2f0495-b513-4c28-baa5-0f5205af777a',
    method: 'get'
  })
}

export function getDealer() {
  return fetch({
    url: '/dealer',
    method: 'get'
  })
}

