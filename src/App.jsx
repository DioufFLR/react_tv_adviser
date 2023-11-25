import './global.css';
import s from './style.module.css';

function App() {
    return (
        <div className={s.main_container}>
            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <div>Logo</div>
                        <div>Subtitle</div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <input style={{width: '100%'}} type="text"/>
                    </div>
                </div>
            </div>
            <div className={s.tv_show_detail}>Detail</div>
            <div className={s.recommandations}>Recommandations</div>
        </div>
    )
}

export default App
