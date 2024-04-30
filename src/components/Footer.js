import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary-100" data-section="footer">
      <div className="py-8 text-center text-sm">
        <p>
          <Link className="link" href="https://t.me/getmentor_dev" target="_blank" rel="noreferrer">
            Telegram
          </Link>
          {' | '}
          <Link
            className="link"
            href="https://www.facebook.com/getmentor.dev"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </Link>
          {' | '}
          <Link className="link" href="mailto:hello@getmentor.dev">
            Email
          </Link>
        </p>
        <p>
          <Link href="/privacy" className="link">
            Политика в отношении персональных данных
          </Link>
        </p>
        <p>
          <Link href="/disclaimer" className="link">
            Отказ от ответственности
          </Link>
        </p>
      </div>
    </footer>
  )
}
