export default async function User({
    params,
  }: {
    params: Promise<{ slug: number }>
  }) {
    const { slug } = await params
    return <div>User: {slug}</div>
  }