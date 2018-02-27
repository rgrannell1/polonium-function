
const content = {
  title: 'Polonium',
  dropdown: {
    termsAndConditionsText: 'Terms & Conditions'
  },
  errors: {
    websiteLength: len => `Website must be at least ${len} character long`,
    passwordLength: len => `Passwords must be at least ${len} character long`
  },
  labels: {
    website: 'Site',
    password: 'Master Password'
  },
  submitButton: {
    defaultText: 'Get Site Password'
  },
  termsAndConditions: {
    title: 'Security & Privacy Policy',
    headers: {
      connection: 'Connection',
      collectedData: 'Information we collect',
      deviceInformation: 'Device information',
      locationInformation: 'Location information',
      informationTransfer: 'Information transfer'
    },
    paragraphs: {
      connection: 'Polonium uses HTTPS to ensure your data is secure during transmission.',
      collectedData: 'We do not store any password-related submitted data; namely the content of the website & password fields, the derived keys, or the options provided the derivation of the keys. We do store metadata such as the IP address, browser details, time, subpages visited, and bitrate of the incoming connection. This data is only used for analytic and security purposes.',
      deviceInformation: 'Details about your device information may be determined from your user-agent and other data submitted to the Polonium server. Client code will not be run to determine details about device information.',
      locationInformation: 'IP addresses & other information submitted to the Polonium server may be geolocated approximately, for analytic & security purposes.',
      informationTransfer: 'At the moment, both the provided website & password are transmitted to the server. In future, this transfer will not occur & all cryptography will be performed in-browser.'
    }
  }
}

export default content
