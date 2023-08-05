package com.cntt.rentalmanagement.repository.impl;

import com.cntt.rentalmanagement.domain.models.Room;
import com.cntt.rentalmanagement.repository.BaseRepository;
import com.cntt.rentalmanagement.repository.RoomRepositoryCustom;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Repository
public class RoomRepositoryCustomImpl implements RoomRepositoryCustom {

    @PersistenceContext
    private EntityManager em;

    @Override
    public Page<Room> searchingRoom(String title, Long userId, Pageable pageable) {
        StringBuilder strQuery = new StringBuilder();
        strQuery.append(" from rental_home.room r ");
        strQuery.append(" where 1=1");
        Map<String, Object> params = new HashMap<>();
        if (Objects.nonNull(title) && !title.isEmpty()) {
            strQuery.append(" AND r.title LIKE :title");
            params.put("title", "%"+title+"%");
        }

        if (Objects.nonNull(userId)) {
            strQuery.append(" AND r.user_id = :userId");
            params.put("userId", userId);
        }

        String strSelectQuery = "SELECT * " + strQuery;

        String strCountQuery = "SELECT COUNT(DISTINCT r.id)" + strQuery;
        return BaseRepository.getPagedNativeQuery(em,strSelectQuery, strCountQuery, params, pageable, Room.class);
    }
}
