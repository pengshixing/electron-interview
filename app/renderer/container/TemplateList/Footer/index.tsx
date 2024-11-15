import React from 'react';
import './index.less';
import Button from '@common/components/Button';

function Footer() {
  const onMadeResume = () => {
    console.log('跳转前往制作页面');
  };
  return (
    <div styleName="footer" className="flex justify-center items-center my-9">
      <Button size="middle" className="use-btn" onClick={onMadeResume}>
        以此模版前往制作简历
      </Button>
    </div>
  );
}

export default Footer;
