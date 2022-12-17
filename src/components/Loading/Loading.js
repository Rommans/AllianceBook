import { Oval } from 'react-loader-spinner';

const Loading = (props) => {

  const { height, width } = props;

  return (
    <div className="flex justify-center item-center py-16">
      <Oval
        height={height}
        width={width}
        color="#ffcd38"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#ffcd38"
        strokeWidth={3}
        strokeWidthSecondary={3}
      />
    </div>
  );
};

export default Loading;
