import Button from './Button'
import Reveal from './Reveal'

type Props = {
  title: string
  body: string
  action?: string
  to?: string
}

export default function CtaBand({ title, body, action = 'Start an enquiry', to = '/contact' }: Props) {
  return (
    <section className="section--tight">
      <div className="wrap">
        <Reveal className="cta">
          <div>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          <div className="btn-row">
            <Button to={to} variant="lime" arrow>
              {action}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
