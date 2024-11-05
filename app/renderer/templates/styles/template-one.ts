import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 48px;
`;
export const Title = styled.p`
  margin: 0;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

export const Content = styled.ul`
  display: block;
  list-style-type: none;
  margin: 0;
  padding: 0 16px 0 20px;
  padding-top: 2rem;
  font-size: 13px;
  & > li {
    padding-bottom: 12px;
  }
`;
export const AvatarBox = styled.div`
  width: 100%;
  height: 100%;
`;
export const AvatarImgWrap = styled.div`
  position: relative;
  height: 100%;
  & > img {
    position: absolute;
    top: 14px;
    left: 55px;
    width: 112px;
    height: 152px;
    z-index: 1;
  }
`;

export const FullWidthWrap = styled.div`
  width: 100%;
`;
export const ProjectComponentWrap = styled.div`
  width: 100%;
`;
export const ProjectComponentLabel = styled.p`
  padding-bottom: 8px;
  color: #01426f;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
`;
export const ProjectComponentList = styled.ul`
  padding-top: 12px;
  padding-bottom: 32px;
  font-size: 13px;
`;
export const ProjectComponentItemBox = styled.ul`
  line-height: 20px;
`;
export const ProjectComponentItemContent = styled.li`
  list-style: outside;
  margin-left: 18px;
  color: #345975;
  & span {
    color: rgba(0, 0, 0, 0.8);
  }
`;
export const ProjectComponentFlexWrap = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;
export const CommonContent = styled.p`
  margin-bottom: 4px;
  min-height: 18px;
  line-height: 18px;
  color: #01426f;
  font-weight: bold;
`
export const ProjectComponentLeftContent = styled.div`
  width: 25%;
  font-size: 13px;
`;
export const ProjectComponentRightContent = styled.div`
  width: 75%;
  color: rgba(0, 0, 0, 0.8);
  font-size: 13px;
`;

export const A4BoxWrap = styled.div`
  width: 100%;
  height: 1160px;
  background-color: #fff;
`;
export const A4BoxContainWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
export const A4BoxContainLeftWrap = styled.div`
  width: 27%;
`;
export const A4BoxContainLeftAvatarWrap = styled.div`
  width: 100%;
  height: 180px;
  text-align: center;
  background-color: #eee;
`;
export const A4BoxContainLeftFillColor = styled.div`
  width: 100%;
  height: 32px;
  background-color: rgb(250, 225, 4);
`;
export const A4BoxContainBaseDataWrap = styled.div`
  width: 100%;
  height: calc(100% - 180px - 32px);
  color: #fff;
  background-color: #01426f;
`;
export const A4BoxContainMainWrap = styled.div`
  width: 72%;
  padding: 0 20px;
  box-sizing: border-box;
`;
export const A4BoxContainListWrap = styled.div`
  margin-top: 32px;
`;

export const SkillLableWrap = styled.p`
  padding-bottom: 8px;
  color: #01426f;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
  margin-bottom: 0px;
`;

export const SkillListWrap = styled.ul`
  padding: 12px 0 32px;
`;
export const SkillItemWrap = styled.li`
  list-style: outside;
  margin-left: 24px;
  line-height: 24px;
  font-size: 13px;
  color: #345975;
  font-weight: bold;
`;

export const SynopsisWrap = styled.div`
  padding-top: 20px;
`

export const SynopsisNameWrap = styled.div`
  margin-bottom: 8px;
  color: #01426f;
  font-size: 28px;
  font-weight: bold;
`
export const SynopsisJobWrap = styled.div`
  margin-bottom: 8px;
  color: #01426f;
  font-size: 18px;
  font-weight: bold;
`

export const SynopsisSummaryWrap = styled.div`
  margin-top: 16px;
  color: rgba(0, 0, 0, 0.8);
  line-height: 22px;
  font-size: 13px;
`
