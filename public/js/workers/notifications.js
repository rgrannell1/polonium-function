
const notifyPassword = ({password, website}) => {
  const message = `Copied password for ${website}`
  if (Notification.permission !== 'denied') {
    const notification = new Notification(message)
  }
}

self.onmessage = msg => {
  const topic = msg.data.topic

  if (workerActions.hasOwnProperty(topic)) {
    workerActions[topic](msg)
  } else {
    alert('notifications are not supported.')
  }
}

const workerActions = {
  notify_password (msg) {
    notifyPassword({
      password: msg.data.password,
      website: msg.data.website
    })
  }
}
