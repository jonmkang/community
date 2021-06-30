import ProfileCard from "../../components/ProfileCard/ProfileCard"
import "./ProfilePage.css";

export default function ProfilePage() {
    const sampleProfile = {
        name: "Jon",
        age: 29,
        hobbies: "Climbing"
    }
    return (
        <div class="default-page">Profile Page
            <ProfileCard personalInformation={sampleProfile}/>
        </div>
    )
}