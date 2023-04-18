export const getRegisterFields = () => {
  return {
    required: [
      { name: 'email', types: ['string'] },
      { name: 'password', types: ['string'] },
      { name: 'name', types: ['string'] },
    ],
    optional: []
  }
}

export const getLoginFields = () => {
  return {
    required: [
      { name: 'email', types: ['string'] },
      { name: 'password', types: ['string'] }
    ],
    optional: []
  }
}