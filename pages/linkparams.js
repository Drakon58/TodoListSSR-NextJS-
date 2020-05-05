import {useRouter} from 'next/router'

const LinkParams = (props) => {
    const router = useRouter();

    return (
        <div>
            <p>Paramter passed in: {router.query.title}</p>
        </div>
    );
}

export default LinkParams;