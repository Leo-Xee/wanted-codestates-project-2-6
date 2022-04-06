# 2022 원티드 프리온보딩 프론트엔드 코스 기업과제 - 케어닥

#### 💡[배포 페이지 바로가기](https://wanted-codestates-project-2-6.vercel.app/)💡

## 사용 스택

<p>
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" />
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
  <img src="https://img.shields.io/badge/react--icons-brightgreen?style=for-the-badge" />
</p>


## 기능 구현


### 1팀 : 유형, 스케줄, 장소 페이지  ([오카무라카에](https://github.com/kaehehehe), [박상우](https://github.com/SangWoo9734), [전호용](https://github.com/mooroom), [강동진](https://github.com/jinn2u))

### 유형 페이지
<img width=30% alt="スクリーンショット 2022-03-31 23 05 22" src="https://user-images.githubusercontent.com/77221488/161074338-2e936d37-f236-41fe-8800-9b7a4885bce8.png">

### 스케줄 페이지

<div style={display:flex}>
  <img src="https://user-images.githubusercontent.com/77221488/161072993-d1eb8a37-ca86-492e-ac2d-6f9d88f95a90.gif" width=30% />
  <img src="https://user-images.githubusercontent.com/77221488/161073489-3bca62b8-cc59-4190-82be-cfc69cffa9fa.gif" width=30%/>
</div>

### 장소 선택 페이지  
<img src="https://user-images.githubusercontent.com/49917043/161906675-ec15a8a9-9412-49a3-9971-315a67787f3b.gif" width=30% />  
  
- 기존에 주어진 요구사항에는 제시되지 않은 페이지지만 실 서비스와 최대한 유사하게 만들기 위해 추가한 페이지입니다.
- 요양 장소를 선택할 수 있는 페이지로 버튼 선택에 따라 보여지는 UI를 디테일하게 다루는 것이 관건이었습니다.
- 많은 state와 그에 따른 조건문을 많이 사용해야하는 페이지라고 생각해서 최대한 코드 가독성과 중복을 신경쓰면서 코드를 작성했습니다.  

---

### 2팀 : 주소 및 완료 페이지 ([허민](https://github.com/hhhminme), [이장민](https://github.com/leo-xee), [신항민](https://github.com/ssinking91))

### ** 기능
<img src="https://user-images.githubusercontent.com/54930877/158109938-8af81616-58b6-4d9f-9e54-c6dc341810c3.gif" width=30% />

주소페이지는 모달을 통해 구현을 하였습니다. openAPI 통신 시 필요한 엔드포인트와 key는 .env 파일에 넣어 사용을 하였습니다. 

```tsx
  async function getAddress(SearchValue: string) {
    try {
      const response = await axios.get<RespAddr>(process.env.REACT_APP_ADDRESS_URL as string, {
        params: {
          currentPage: 1,
          countPerPage: 10,
          keyword: SearchValue,
          confmKey: process.env.REACT_APP_ADDRESS_API_KEY,
          resultType: "json",
        },
      });
      if (response.data) {
        setAddress(response.data.results.juso);
      }
    } catch (error) {
      console.error(error);
    }
  }
```
이때 통신된 데이터 결과 값은 Address state에 저장하여 목록에 출력을 해주고 있습니다. 
이때 사용자가 주소를 클릭하였을 경우, 해당 내용을 필터링하여 저장하고 차후 상세주소를 입력하면 해당 내용을 context에 저장하여 완료페이지에서도 사용할 수 있도록 구현하였습니다.

```tsx
  const handleAddressClick = (value: Addr) => {
    const filterdObj: Address = {
      addressDetail: "",
      jibunAddress: value.jibunAddr,
      liName: value.lnbrMnnm,
      locationCode: value.emdNo,
      roadCode: value.zipNo,
      myundongName: value.emdNm,
      roadAddress: value.roadAddr,
      sidoName: value.siNm,
      sigunguName: value.sggNm,
    };
    setFilterdAddr(filterdObj);
    setModalState(false);
  };
```
```tsx
 useEffect(() => {
    if (filterdAddr?.roadAddress && detailAddress && covidTest) {
      const tmpObj: Address = filterdAddr;
      tmpObj.addressDetail = detailAddress;
      dispatch({ type: "SET_ADDRESS", address: tmpObj });
      dispatch({ type: "SET_COVID_TEST_TYPE", covidTestType: covidTest });
      setDisabled(false);
    }
  }, [filterdAddr, detailAddress, covidTest]);
```
---


## 팀원 소개

| 이름         | 깃허브                                           |
| ------------ | --------------------------------------------- |
| 강동진       | [jinn2u](https://github.com/jinn2u)             |
| 박상우       | [SangWoo9734](https://github.com/SangWoo9734)   |
| 신항민       | [ssinking91](https://github.com/ssinking91)     |
| 이장민       | [leo-xee](https://github.com/leo-xee)           |
| 오카무라카에 | [kaehehehe](https://github.com/kaehehehe)         | 
| 허민         | [hhhminme](https://github.com/hhhminme)        |
| 전호용       | [mooroom](https://github.com/mooroom)           |
