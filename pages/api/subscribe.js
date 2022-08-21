// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

  const { email } = req.body;
  //console.log('email: ', email);
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const result = await fetch('https://api.convertkit.com/v3/forms/3124189/subscribe', {
    method: 'POST',
    headers: {
      //Authorization: `Token ${process.env.REVUE_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, api_key: 'qWiV9VOr0QpB0WE4SpPYIQ'    })
  });
  const data = await result.json();

  if (data.error) {
    return res.status(500).json({ error: data.message });
  }

  //res.status(200).json({ name: 'John Doe' })
  return res.status(201).json({ error: '' });

}
