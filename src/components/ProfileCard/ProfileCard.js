import './ProfileCard.css';
import Info from '../Info/Info';
export default function ProfileCard({ personalInformation }) {
    let details = Object.entries(personalInformation).map((item) => {
        return <Info detailsTitle={item[0]} detailsInfo={item[1]} />
    })
    return (
        <div class="profile-card">
            {details}
        </div>
    )
    
}