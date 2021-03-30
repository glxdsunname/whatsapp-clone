import { Circle} from 'better-react-spinkit';
function Loading() {
    return (
        <div style={{
            display: 'grid',
            placeItems:'center',
        }}>
            <img 
                src="https://goto360.vn/theme/data/assets/images/phone.png"
                alt=""
                style={{
                    height:200,
                    marginBottom: 10
                }}
            />
            <Circle color="#3CBC28" size={60} />
        </div>
    )
}

export default Loading
