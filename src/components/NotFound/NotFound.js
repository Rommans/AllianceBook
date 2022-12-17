import { MagnifyingGlass } from 'react-loader-spinner';

const NotFound = (props) => {
  const { height, width } = props;

  return (
    <div className="flex justify-center items-center py-16 flex-col">
      <MagnifyingGlass
        visible={true}
        height={height}
        width={width}
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#333333"
        color="#ffc107"
      />
      <p className="text-2xl text-gray-300">Not Found</p> 
    </div>
  );
};

export default NotFound;
