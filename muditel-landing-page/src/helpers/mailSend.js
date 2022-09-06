export default async function requestMailer({ name, email, content }) {
  try {

    const response = await fetch("...");
    if(response.ok)
        return true

    return false
} catch (error) {
    return new Error(error.message)
  }
}
