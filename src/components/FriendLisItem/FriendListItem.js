const FriendListItem = (props) => {
    const {avatar, name, className} = props;

        return (
            <li class="friend-item">
                <span class={className}></span>
                <img class="avatar" src={avatar} alt={avatar} width="48" />
                <p class="name">{name}</p>
            </li>
        )
  
}

export default FriendListItem;