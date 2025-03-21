const locale_ru = {
    menu: {
        articles: 'Статьи',
        list: 'Список',
        new: 'Добавить',
        other: 'Другое',
        carousel: 'Карусель',
        table: 'Таблица',
    },
    table: {
        code: 'Код',
        name: 'Название',
        category: 'Категория',
        quantity: 'Количество'
    },
    fetch: {
        error: 'Произошла ошибка во время загрузки',
        cancel: 'Отменить загрузку',
        tryAgain: 'Попробовать снова'
    },
    articleAddForm: {
        validationError: {
            titleShort: 'Название слишком короткое',
            bodyShort: 'Тело слишком короткое',
            authorNameShort: 'Имя автора слишком короткое'
        },
        fields: {
            title: 'Название',
            body: 'Текст статьи',
            doPublish: 'Опубликовать',
            publishDate: 'Дата публикации',
            author: 'Автор',
            submit: 'Отправить'
        }
    },
    aboutUs: {
        aboutUs: 'О нас',
        articles: 'Все статьи',
        addNewArticle: 'Добавить статью'
    },
    article: {
        articles: 'Статьи',
        togglePublishStateConfirm: 'Вы хотите переключить статус опубликованности?',
        confirmTitle: 'Подтверждение',
        cancel: 'Отменить',
        yes: 'Да',
        confirmed: 'Изменено',
        acceptedMessage: 'Вы изменили статус',
        togglePublishState: 'Переключить статус',
        seeFull: 'Полная статья'
    }
};

const locale = locale_ru;

export default locale;