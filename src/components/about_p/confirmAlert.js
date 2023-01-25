import { confirmAlert } from 'react-confirm-alert';

submit = () => {
    confirmAlert({
      title: 'just do eat',
      message: '주문 메뉴를 모두 삭제하시겠습니까?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Yes')
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  };

  
    return (
      <div className='container'>
        <button onClick={this.submit}>Confirm dialog</button>
      </div>
    );
 


export default confirmAlert