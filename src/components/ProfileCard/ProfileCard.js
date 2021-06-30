import './ProfileCard.css';

export default function ProfileCard({ personalInformation }) {
    const { name, age, hobbies } = personalInformation;


    return (
        <div class="profile-card">
            Name: {name}<br />
            Age: {age}<br />
            Hobbies: {hobbies}<br/>
        </div>
    )
}