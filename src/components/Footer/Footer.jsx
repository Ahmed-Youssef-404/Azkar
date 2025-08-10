import './FooterStyles.css';

export default function Footer() {
    return (
        <footer className="footer">
            <h4>2025 Ahmed Youssef &copy;</h4>
            <div className="contactIcons">
                <a
                    href="https://www.linkedin.com/in/ahmed-youssef-37732b2b6/"
                    style={{ textDecoration: 'none', margin: '0 10px' }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                <a
                    href="mailto:Ahmed.youssef.5522.52@gmail.com"
                    style={{ textDecoration: 'none', margin: '0 10px' }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Email
                </a>
                <a
                    href="https://wa.me/201158973342"
                    style={{ textDecoration: 'none', margin: '0 10px' }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    WhatsApp
                </a>
            </div>
        </footer>
    );
}